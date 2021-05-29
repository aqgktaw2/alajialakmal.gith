import Image from "next/image";

import Heading from "@components/heading";
import formatDate from "@utils/formatDate";
import { IconClock } from "@components/icons";
import TwitterShareButton from "@components/twitterShareButton";

import {
	StyledPostHeader,
	StyledPostCover,
	StyledHeaderContent,
	StyledHeaderMeta,
	HeaderAuthor,
} from "./styles";

export default function PostHeader({ title, coverImage, date, author, readTime, tags, type }) {
	return (
		<StyledPostHeader>
			{/* COVER IMAGE */}
			<StyledPostCover>
				<Image src={coverImage} alt={`Cover Image for ${title}`} layout="fill" />
			</StyledPostCover>

			<StyledHeaderContent>
				<Heading level={1}>{title}</Heading>

				<StyledHeaderMeta>
					{/* AUTHOR */}
					<HeaderAuthor author={author} />

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
				</StyledHeaderMeta>

				{/* TWITTER SHARE BUTTON */}
				<TwitterShareButton title={title} tags={tags} type={type} />
			</StyledHeaderContent>
		</StyledPostHeader>
	);
}
