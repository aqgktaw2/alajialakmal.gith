import { useEffect } from "react";

export default function PostBody({ content }) {
	useEffect(() => {
		document.querySelectorAll("a").forEach(link => {
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
		<div className="post-body">
			<div className="post-body__inner" dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}
