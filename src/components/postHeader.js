import Image from "next/image";

import Author from "./author";
import formatDate from "@/utils/formatDate";
import { IconClock } from "@/components/icons";
import TwitterShareButton from "@/components/twitterShareButton";

export default function PostHeader({ title, coverImage, date, author, readTime, tags, type }) {
	return (
		<div className="post-header">
			<div className="post-header__cover">
				{/* COVER IMAGE */}
				<Image src={coverImage} alt={`Cover Image for ${title}`} layout="fill" />
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
				<TwitterShareButton title={title} tags={tags} type={type} />
			</div>
		</div>
	);
}
