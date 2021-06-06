import { StyledInvisibleText } from "./styles";

const InvisibleText = props => {
	const { children, ...restProps } = props;
	return <StyledInvisibleText {...restProps}>{children}</StyledInvisibleText>;
};

export default InvisibleText;
