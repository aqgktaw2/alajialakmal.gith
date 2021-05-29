import { StyledContainer } from "./styles";

const Container = ({ children, ...restProps }) => {
	return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

export default Container;
