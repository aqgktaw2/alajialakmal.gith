import Link from "next/link";
import React from "react";

import useTwitterShare from "@hooks/useTwitterShare";
import { IconTwitter } from "@components/icons";

const twitterShareButton = ({ title, tags, type }) => {
	const { twitterShareUrl } = useTwitterShare({ title, tags });

	return (
		<Link href={twitterShareUrl} passHref>
			<a
				data-gsap="reveal-bottom"
				className="btn twitter-share-button"
				target="_blank"
				rel="noreferrer noopener"
			>
				<IconTwitter /> Share this {type.endsWith("s") ? type.slice(0, type.length - 1) : type}
			</a>
		</Link>
	);
};

export default twitterShareButton;
