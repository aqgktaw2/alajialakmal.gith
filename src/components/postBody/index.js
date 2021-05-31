import { useEffect, useRef } from "react";

import { StyledPostBody, StyledPostInner } from "./styles";

export default function PostBody({ content }) {
	const postBodyRef = useRef();

	useEffect(() => {
		postBodyRef.current.querySelectorAll("a").forEach(link => {
			if (link?.getAttribute("href")?.includes("#")) {
				link.addEventListener("click", function (evt) {
					evt.preventDefault();
					console.log("clicked");

					const scrollTarget = document.getElementById(link?.getAttribute("href")?.split("#")[1]);

					window.scrollTo({
						top: scrollTarget?.getBoundingClientRect().top,
						left: 0,
						behavior: "smooth",
					});

					window.history.pushState({}, "", link?.getAttribute("href"));
				});
			}
		});
	}, []);

	return (
		<StyledPostBody ref={postBodyRef}>
			<StyledPostInner>{content}</StyledPostInner>
		</StyledPostBody>
	);
}
