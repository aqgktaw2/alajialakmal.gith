import * as React from "react";

function SvgIconBackTop(props) {
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
			<path
				d="M6 4h12v2H6zm.707 11.707L11 11.414V20h2v-8.586l4.293 4.293 1.414-1.414L12 7.586l-6.707 6.707z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgIconBackTop;
