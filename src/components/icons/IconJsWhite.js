import * as React from "react";

function SvgIconJsWhite(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			width="1em"
			height="1em"
			style={{
				msTransform: "rotate(360deg)",
				WebkitTransform: "rotate(360deg)",
			}}
			viewBox="0 0 24 24"
			transform="rotate(360)"
			{...props}
		>
			<g fill="#fff">
				<path d="M14 11.25c0-.966.784-1.75 1.75-1.75h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v1.5c0 .138.112.25.25.25h.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0116.25 18h-1.5a.75.75 0 010-1.5h1.5a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25h-.5A1.75 1.75 0 0114 12.75v-1.5zM12.75 10.25a.75.75 0 00-1.5 0v6a.25.25 0 01-.25.25H9.75a.75.75 0 000 1.5H11a1.75 1.75 0 001.75-1.75v-6z" />
				<path d="M3 6.25v11.5A3.25 3.25 0 006.25 21h11.5A3.25 3.25 0 0021 17.75V6.25A3.25 3.25 0 0017.75 3H6.25A3.25 3.25 0 003 6.25zM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 01-1.75 1.75H6.25a1.75 1.75 0 01-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75z" />
			</g>
		</svg>
	);
}

export default SvgIconJsWhite;
