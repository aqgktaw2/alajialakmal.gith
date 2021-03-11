// import HtmlToReact from "html-to-react";
// const HtmlToReactParser = HtmlToReact.Parser();

// import Image from "next/image";

// const isValidNode = function () {
// 	return true;
// };

// // Order matters. Instructions are processed in the order they're defined
// const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
// const processingInstructions = [
// 	{
// 		// Custom <h1> processing
// 		shouldProcessNode: function (node) {
// 			return node.parent && node.parent.name && node.parent.name === "img";
// 		},
// 		processNode: function (node, children) {
// 			return node.data.toUpperCase();
// 		},
// 	},
// 	{
// 		// Anything else
// 		shouldProcessNode: function (node) {
// 			return true;
// 		},
// 		processNode: processNodeDefinitions.processDefaultNode,
// 	},
// ];
// const htmlToReactParser = new HtmlToReactParser();
// const reactComponent = htmlToReactParser.parseWithInstructions(
// 	htmlInput,
// 	isValidNode,
// 	processingInstructions,
// );
