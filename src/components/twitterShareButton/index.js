import React from "react";

import useTwitterShare from "@hooks/useTwitterShare";
import Link from "@components/link";
import { IconTwitter } from "@components/icons";

import { Button } from "./styles";

const twitterShareButton = ({ title, tags, type }) => {
	const { twitterShareUrl } = useTwitterShare({ title, tags });

	return (
		<Link
			href={twitterShareUrl}
			passHref
			data-gsap="reveal-bottom"
			target="_blank"
			rel="noreferrer noopener"
		>
			<Button as="span">
				<IconTwitter /> Share this {type.endsWith("s") ? type.slice(0, type.length - 1) : type}
			</Button>
		</Link>
	);
};

export default twitterShareButton;
