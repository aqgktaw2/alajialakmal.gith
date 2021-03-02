import Image from "next/image";
import Link from "next/link";

import Author from "./author";
import formatDate from "@/utils/formatDate";
import useTwitterShare from "@/hooks/useTwitterShare";
import { IconClock, IconTwitter } from "@/components/icons";

export default function PostHeader({ title, coverImage, date, author, readTime, tags, type }) {
	const { twitterShareUrl } = useTwitterShare({ title, tags });

	return (
		<div className="post-header">
			<div className="post-header__cover">
				{/* COVER IMAGE */}
				<Image
					src={coverImage}
					alt={`Cover Image for ${title}`}
					className=""
					layout="responsive"
					height={620}
					width={1240}
				/>
			</div>
			<div className="post-header__content">
				<h1>{title}</h1>
				<div className="post-header__meta">
					{/* AUTHOR */}
					<Author author={author} />

					{/* DATE */}
					<div>
						<em>
							<strong>Published on</strong>: {formatDate(date)}
						</em>
					</div>

					{/* READ TIME */}
					<div>
						<span>|</span> <IconClock /> {readTime}
					</div>
				</div>

				{/* TWITTER SHARE BUTTON */}
				<Link href={twitterShareUrl} passHref>
					<a className="btn post-header__share" target="_blank" rel="noreferrer noopener">
						<IconTwitter /> Share this {type.endsWith("s") ? type.slice(0, type.length - 1) : type}
					</a>
				</Link>
				<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
			</div>
		</div>
	);
}
