import React from "react";
import HtmlToReact from "html-to-react";
import Image from "next/image";

import Highlighter from "@components/highlighter";

const htmlToReactParser = new HtmlToReact.Parser();
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

// TRANSFORM INLINE CSS TO STYLE OBJECT
// const parseReactStyles = inlineStyles =>
// 	inlineStyles?.split(";").reduce((acc, cur) => {
// 		let key = cur.split(":")[0];
// 		let val = cur.split(":")[1];
// 		key = key.includes("-")
// 			? (() => {
// 					const part1 = key.split("-")[0];
// 					const part2 = key.split("-")[1];
// 					return `${part1}${part2.slice(0, 1).toUpperCase()}${part2.slice(1)}`;
// 			  })()
// 			: key;
// 		return { ...acc, [key]: val };
// 	}, {});

const processingInstructions = [
	// PROCESS NEXT IMAGE
	{
		shouldProcessNode(node) {
			return node.type === "tag" && node.name === "img";
		},
		processNode(node, children) {
			return node.attribs["data-process"] ? (
				<div data-gsap="reveal-bottom" className="next-image">
					<Image layout="fill" src={node.attribs.src} alt={node.attribs.alt} />
				</div>
			) : (
				<img src={node.attribs.src} alt={node.attribs.alt} />
			);
		},
	},

	// Syntax Highlight Code
	{
		shouldProcessNode(node) {
			return node.type === "tag" && node.name === "code";
		},
		processNode(node, children) {
			return <Highlighter codeString={children} />;
		},
	},

	{
		shouldProcessNode() {
			return true;
		},
		processNode: processNodeDefinitions.processDefaultNode,
	},
];

const toReactComponent = html =>
	htmlToReactParser.parseWithInstructions(html, () => true, processingInstructions);

export default toReactComponent;
