import { useEffect, useRef } from "react";

import { StyledPostBody, StyledPostInner } from "./styles";

export default function PostBody({ content }) {
	const postBodyRef = useRef();

	useEffect(() => {
		postBodyRef.current.querySelectorAll("a").forEach(link => {
			if (link?.getAttribute("href")?.startsWith("#")) {
				link.addEventListener("click", function (evt) {
					evt.preventDefault();
					const scrollTarget = document.getElementById(
						link?.getAttribute("href")?.replace("#", ""),
					);
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
			{/* <div  dangerouslySetInnerHTML={{ __html: content }} /> */}
		</StyledPostBody>
	);
}
