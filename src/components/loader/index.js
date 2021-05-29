import { StyledLoader } from "./styles";

const Loader = props => {
	return (
		<StyledLoader viewBox="20 20 60 60" width="100" height="100" {...props}>
			<circle cx="40" cy="50" r="10"></circle>
			<circle cx="60" cy="50" r="10"></circle>
			<circle cx="50" cy="40" r="10"></circle>
			<circle cx="50" cy="60" r="10"></circle>
		</StyledLoader>
	);
};

export default Loader;
