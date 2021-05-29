const Loader = ({ className, ...props }) => {
	return (
		<svg
			className={`loader ${className}`}
			viewBox="20 20 60 60"
			width="100"
			height="100"
			{...props}
		>
			<circle className="loader__circle--1" cx="40" cy="50" r="10"></circle>
			<circle className="loader__circle--2" cx="60" cy="50" r="10"></circle>
			<circle className="loader__circle--3" cx="50" cy="40" r="10"></circle>
			<circle className="loader__circle--4" cx="50" cy="60" r="10"></circle>
		</svg>
	);
};

export default Loader;
