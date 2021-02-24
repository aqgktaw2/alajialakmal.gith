import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import debounce from "@/utils/debounce";
import { Blob1, Blob2, Blob3, Blob4, Blob5, Blob6 } from "@/components/blobs";

const shapes = [<Blob1 />, <Blob2 />, <Blob3 />, <Blob4 />, <Blob4 />, <Blob5 />, <Blob6 />];

const SnippetCard = ({ post }) => {
	const imageContainerRef = useRef();

	useEffect(() => {
		const matchHeight = debounce(function () {
			gsap.to(imageContainerRef.current, {
				height: imageContainerRef.current.getBoundingClientRect().width,
			});
		}, 100);
		matchHeight();
		window.addEventListener("resize", matchHeight);
		return () => {
			window.removeEventListener("resize", matchHeight);
		};
	}, []);

	return (
		<div data-gsap="reveal-bottom" className="snippet-card">
			<div className="snippet-card__shape">
				{shapes[Math.floor(Math.random() * shapes.length)]}
			</div>

			<Link href={`/snippets/${post.slug}`} passHref>
				<a className="snippet-card__body">
					<div ref={imageContainerRef} className="snippet-card__image">
						<Image src={post.coverImage} layout="fill" />
					</div>

					<div className="snippet-card__info">
						<h3>Test Snippet Title</h3>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default SnippetCard;
