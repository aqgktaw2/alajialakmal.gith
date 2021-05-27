import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import Link from "@components/link";
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
	AlertLink,
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
			<StyledHeader
				ref={headerRef}
				id="global-header"
				isScrolled={isScrolled}
				widthAlert={!!children}
			>
				<StyledHeaderInner>
					<StyledHeaderTop isScrolled={isScrolled}>
						<Link href="/" passHref underLine={false}>
							<SiteLogo width="8.5rem" height="8.5rem" />
						</Link>
					</StyledHeaderTop>

					<StyledHeaderBottom isScrolled={isScrolled}>
						<ul>
							{NAV_ITEMS.map(({ href, label }, idx) => (
								<li key={idx}>
									<StyledNavLink href={href} passHref isActive={router.pathname === href}>
										{label}
									</StyledNavLink>
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
						<AlertLink href={linkHref} passHref>
							{children} <IconArrowRight />
						</AlertLink>
					)}
				</p>
			</StyledAlertInner>
		</StyledHeaderAlert>
	);
};

Header.Alert = HeaderAlert;

export default Header;
