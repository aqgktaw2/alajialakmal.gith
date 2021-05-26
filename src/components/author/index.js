import { StyledAuthor } from "./styles";

const Author = ({ author, size = "", ...restProps }) => {
	return (
		<StyledAuthor {...restProps} size={size}>
			<img loading="lazy" src={author.picture} alt={author.name} />
		</StyledAuthor>
	);
};

export default Author;
