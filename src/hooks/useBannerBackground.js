import { useEffect, useState } from "react";

import debounce from "@/utils/debounce";

const useBannerBackground = () => {
	// Re-initialize canvas on window resize
	const [windowInnerWidth, setWindowInnerWidth] = useState(0);
	useEffect(() => {
		const resize = debounce(function () {
			setWindowInnerWidth(window.innerWidth);
		}, 100);
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	// Draw stars & shooting starts on banner canvas
	useEffect(() => {
		// Helpers
		function lineToAngle(x1, y1, length, radians) {
			const x2 = x1 + length * Math.cos(radians);
			const y2 = y1 + length * Math.sin(radians);
			return { x: x2, y: y2 };
		}

		function randomRange(min, max) {
			return min + Math.random() * (max - min);
		}

		function degreesToRads(degrees) {
			return (degrees / 180) * Math.PI;
		}

		// Particle
		const particle = {
			x: 0,
			y: 0,
			vx: 0,
			vy: 0,
			radius: 0,

			create: function (x, y, speed, direction) {
				const obj = Object.create(this);
				obj.x = x;
				obj.y = y;
				obj.vx = Math.cos(direction) * speed;
				obj.vy = Math.sin(direction) * speed;
				return obj;
			},

			getSpeed: function () {
				return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
			},

			setSpeed: function (speed) {
				const heading = this.getHeading();
				this.vx = Math.cos(heading) * speed;
				this.vy = Math.sin(heading) * speed;
			},

			getHeading: function () {
				return Math.atan2(this.vy, this.vx);
			},

			setHeading: function (heading) {
				const speed = this.getSpeed();
				this.vx = Math.cos(heading) * speed;
				this.vy = Math.sin(heading) * speed;
			},

			update: function () {
				this.x += this.vx;
				this.y += this.vy;
			},
		};

		// Canvas and settings
		const canvas = document.querySelector(".section-code-banner__background");
		const context = canvas.getContext("2d");
		const width = (canvas.width = window.innerWidth);
		const height = (canvas.height = window.innerHeight);
		const stars = [];
		const shootingStars = [];
		const layers = [
			{ speed: 0.03, scale: 0.2, count: 160 },
			{ speed: 0.06, scale: 0.5, count: 25 },
			{ speed: 0.1, scale: 0.75, count: 15 },
		];
		const starsAngle = 145;
		const shootingStarSpeed = {
			min: 15,
			max: 20,
		};
		const shootingStarOpacityDelta = 0.01;
		const trailLengthDelta = 0.01;
		const shootingStarEmittingInterval = 1750;
		const shootingStarLifeTime = 500;
		const maxTrailLength = 350;
		const starBaseRadius = 2;
		const shootingStarRadius = 3;

		// Create all stars
		for (let j = 0; j < layers.length; j += 1) {
			const layer = layers[j];
			for (let i = 0; i < layer.count; i += 1) {
				const star = particle.create(randomRange(0, width), randomRange(0, height), 0, 0);
				star.radius = starBaseRadius * layer.scale;
				star.setSpeed(layer.speed);
				star.setHeading(degreesToRads(starsAngle));
				stars.push(star);
			}
		}

		function createShootingStar() {
			const shootingStar = particle.create(
				randomRange(width / 2, width),
				randomRange(0, height / 2),
				0,
				0,
			);
			shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
			shootingStar.setHeading(degreesToRads(starsAngle));
			shootingStar.radius = shootingStarRadius;
			shootingStar.opacity = 0;
			shootingStar.trailLengthDelta = 0;
			shootingStar.isSpawning = true;
			shootingStar.isDying = false;
			shootingStars.push(shootingStar);
		}

		function killShootingStar(shootingStar) {
			setTimeout(function () {
				shootingStar.isDying = true;
			}, shootingStarLifeTime);
		}

		function update() {
			context.clearRect(0, 0, width, height);
			context.fillStyle = "rgba(255, 255, 255, 0)";
			context.fillRect(0, 0, width, height);
			context.fill();
			for (let i = 0; i < stars.length; i += 1) {
				const star = stars[i];
				star.update();
				drawStar(star);
				if (star.x > width) {
					star.x = 0;
				}
				if (star.x < 0) {
					star.x = width;
				}
				if (star.y > height) {
					star.y = 0;
				}
				if (star.y < 0) {
					star.y = height;
				}
			}

			for (let i = 0; i < shootingStars.length; i += 1) {
				const shootingStar = shootingStars[i];
				if (shootingStar.isSpawning) {
					shootingStar.opacity += shootingStarOpacityDelta;
					if (shootingStar.opacity >= 1.0) {
						shootingStar.isSpawning = false;
						killShootingStar(shootingStar);
					}
				}
				if (shootingStar.isDying) {
					shootingStar.opacity -= shootingStarOpacityDelta;
					if (shootingStar.opacity <= 0.0) {
						shootingStar.isDying = false;
						shootingStar.isDead = true;
					}
				}
				shootingStar.trailLengthDelta += trailLengthDelta;

				shootingStar.update();
				if (shootingStar.opacity > 0.0) {
					drawShootingStar(shootingStar);
				}
			}

			// Delete dead shooting shootingStars
			for (let i = shootingStars.length - 1; i >= 0; i--) {
				if (shootingStars[i].isDead) {
					shootingStars.splice(i, 1);
				}
			}
			requestAnimationFrame(update);
		}

		function drawStar(star) {
			context.fillStyle = "rgba(255, 250, 254,0.75)";
			context.beginPath();
			context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
			context.fill();
		}

		function drawShootingStar(p) {
			const x = p.x;
			const y = p.y;
			const currentTrailLength = maxTrailLength * p.trailLengthDelta;
			const pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

			context.fillStyle = "rgba(163, 2, 146, " + p.opacity + ")";
			const starLength = 5;
			context.beginPath();
			context.moveTo(x - 1, y + 1);

			context.lineTo(x, y + starLength);
			context.lineTo(x + 1, y + 1);

			context.lineTo(x + starLength, y);
			context.lineTo(x + 1, y - 1);

			context.lineTo(x, y + 1);
			context.lineTo(x, y - starLength);

			context.lineTo(x - 1, y - 1);
			context.lineTo(x - starLength, y);

			context.lineTo(x - 1, y + 1);
			context.lineTo(x - starLength, y);

			context.closePath();
			context.fill();

			// trail
			context.fillStyle = "rgba(163, 2, 146, " + p.opacity + ")";
			context.beginPath();
			context.moveTo(x - 1, y - 1);
			context.lineTo(pos.x, pos.y);
			context.lineTo(x + 1, y + 1);
			context.closePath();
			context.fill();
		}

		// Run
		update();

		// Shooting stars
		setInterval(function () {
			createShootingStar();
		}, shootingStarEmittingInterval);
	}, [windowInnerWidth]);

	return null;
};

export default useBannerBackground;
