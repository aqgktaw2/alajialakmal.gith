import Image from "@components/Image";
import { StyledAuthor } from "./styles";

const Author = ({ author, size = "", ...restProps }) => {
	return (
		<StyledAuthor {...restProps} size={size}>
			<Image aspectRatio={1 / 1} src={author.picture} alt={author.name} />
		</StyledAuthor>
	);
};

export default Author;
