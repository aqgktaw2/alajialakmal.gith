import { createContext, useContext, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import { NAV_ITEMS } from "@lib/constants";
import SiteLogo from "@components/siteLogo";
import { IconArrowRight } from "@components/icons";

import {
	StyledHeader,
	StyledHeaderInner,
	StyledHeaderTop,
	StyledHeaderBottom,
	StyledHeaderAlert,
	StyledAlertInner,
	StyledNavLink,
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext(false);

const Header = ({ children }) => {
	const headerRef = useRef();
	const router = useRouter();

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const trigger = ScrollTrigger.create({
			trigger: "main",
			start: "top top-=50",
			onUpdate(self) {
				if (self.progress > 0) {
					return setIsScrolled(true);
				}
				setIsScrolled(false);
			},
		});

		return () => {
			trigger.kill();
		};
	}, []);

	return (
		<ScrollContext.Provider value={{ isScrolled }}>
			{children}
			<StyledHeader ref={headerRef} isScrolled={isScrolled} widthAlert={!!children}>
				<StyledHeaderInner>
					<StyledHeaderTop isScrolled={isScrolled}>
						<Link href="/" passHref>
							<a>
								<SiteLogo width="8.5rem" height="8.5rem" />
							</a>
						</Link>
					</StyledHeaderTop>

					<StyledHeaderBottom isScrolled={isScrolled}>
						<ul>
							{NAV_ITEMS.map(({ href, label }, idx) => (
								<li key={idx}>
									<Link href={href} passHref>
										<StyledNavLink isActive={router.pathname === href}>{label}</StyledNavLink>
									</Link>
								</li>
							))}
						</ul>
					</StyledHeaderBottom>
				</StyledHeaderInner>
			</StyledHeader>
		</ScrollContext.Provider>
	);
};

const HeaderAlert = ({ children, linkHref }) => {
	const { isScrolled } = useContext(ScrollContext);

	return (
		<StyledHeaderAlert isScrolled={isScrolled}>
			<StyledAlertInner>
				<p>
					{linkHref && (
						<Link href={linkHref} passHref>
							<a>
								{children} <IconArrowRight />
							</a>
						</Link>
					)}
				</p>
			</StyledAlertInner>
		</StyledHeaderAlert>
	);
};

Header.Alert = HeaderAlert;

export default Header;
