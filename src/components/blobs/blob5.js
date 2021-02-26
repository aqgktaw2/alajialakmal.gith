const Blob5 = props => {
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
				d="M23.3-26.9c6.5 4.7 11.3 12.3 14.2 21.4 3 9.1 4.2 19.7-.2 26.7-4.4 6.9-14.5 10.3-23.8 11.8-9.2 1.6-17.5 1.3-24.2-1.8-6.7-3.2-11.7-9.3-17.6-16.4-6-7.1-12.9-15.2-12.2-22.4.7-7.3 8.9-13.7 16.9-18.2C-15.5-30.2-7.8-32.7.3-33c8.1-.4 16.4 1.4 23 6.1z"
				transform="translate(50 50) scale(1.21)"
				style={{
					WebkitTransition: "all 0.3s ease 0s",
					transition: "all 0.3s ease 0s",
				}}
			></path>
		</svg>
	);
};

export default Blob5;
