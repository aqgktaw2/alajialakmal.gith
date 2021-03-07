import { createContext, useContext, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import classNames from "classnames";

import { NAV_ITEMS } from "@/lib/constants";
import SiteLogo from "@/components/siteLogo";
import { IconArrowRight } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext(false);

const Header = ({ children }) => {
	const headerRef = useRef();
	const router = useRouter();

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		ScrollTrigger.create({
			trigger: "main",
			start: "top top-=50",
			onUpdate(self) {
				if (self.progress > 0) {
					return setIsScrolled(true);
				}
				setIsScrolled(false);
			},
		});
	}, [router.asPath]);

	return (
		<ScrollContext.Provider value={{ isScrolled }}>
			{children}
			<header
				ref={headerRef}
				className={classNames("global-header", {
					scrolled: isScrolled,
					"global-header--with-alert": !!children,
				})}
			>
				<div className="global-header__inner">
					<div className="global-header__row global-header__row--1">
						<Link href="/" passHref>
							<a>
								<SiteLogo width="8.5rem" height="8.5rem" />
							</a>
						</Link>
					</div>

					<nav className="global-header__row global-header__row--2">
						<ul>
							{NAV_ITEMS.map(({ href, label }, idx) => (
								<li key={idx}>
									<Link href={href} passHref>
										<a
											className={classNames("", {
												active: router.pathname === href,
											})}
										>
											{label}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>
		</ScrollContext.Provider>
	);
};

const HeaderAlert = ({ children, linkHref }) => {
	const { isScrolled } = useContext(ScrollContext);

	return (
		<div className={classNames("header-alert", { scrolled: isScrolled })}>
			<div className="header-alert__inner">
				<p>
					{linkHref && (
						<Link href={linkHref} passHref>
							<a>
								{children} <IconArrowRight />
							</a>
						</Link>
					)}
				</p>
			</div>
		</div>
	);
};

Header.Alert = HeaderAlert;

export default Header;
