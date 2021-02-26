const Blob6 = props => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" id="sw-js-blob-svg" viewBox="0 0 100 100" {...props}>
			<defs>
				<linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
					<stop id="stop1" offset="0%" stopColor="rgba(111, 2, 176, 1)"></stop>
					<stop id="stop2" offset="100%" stopColor="rgba(154, 2, 242, 1)"></stop>
				</linearGradient>
			</defs>
			<path
				fill="url(#sw-gradient)"
				stroke="url(#sw-gradient)"
				strokeWidth="0"
				d="M27.2-32.4C34.9-26 40.4-17.1 42.6-7.1c2.2 9.9 1.1 20.8-4.9 26.8-6 5.9-16.8 7.1-26.3 9.6s-17.7 6.5-24.7 5c-7.1-1.6-13-8.6-16.7-16.4-3.8-7.7-5.4-16.1-3.3-23 2.2-6.8 8.2-12.2 14.4-18.9 6.2-6.6 12.5-14.5 20.6-16.5 8.1-2 17.8 1.8 25.5 8.1z"
				transform="translate(44 54) scale(1.25)"
				style={{
					WebkitTransition: "all 0.3s ease 0s",
					transition: "all 0.3s ease 0s",
				}}
			></path>
		</svg>
	);
};

export default Blob6;
