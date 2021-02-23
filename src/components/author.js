import classNames from "classnames";

const Author = ({ author, size = "" }) => {
	return (
		<div
			className={classNames("author", {
				"author--sm": size === "sm",
				"author--lg": size === "lg",
			})}
		>
			<img src={author.picture} alt={author.name} />
		</div>
	);
};

export default Author;
