import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Highlighter = ({ codeString }) => {
	return (
		<SyntaxHighlighter language="javascript" style={atomDark}>
			{codeString}
		</SyntaxHighlighter>
	);
};

export default Highlighter;
