import NextImage from "next/image";

import { StyledImage } from "./styles";

const Image = props => {
	const { aspectRatio = 16 / 9, ...restProps } = props;

	return (
		<StyledImage style={{ "--aspectRatio": `${(1 / aspectRatio) * 100}%` }}>
			<NextImage layout="fill" {...restProps} />
		</StyledImage>
	);
};

export default Image;
