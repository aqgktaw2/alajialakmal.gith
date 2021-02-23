import Image from "next/image";

import formatDate from "@/utils/formatDate";
import Author from "./author";

export default function PostHeader({ title, coverImage, date, author }) {
	return (
		<div className="post-header">
			<div className="post-header__cover">
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
					<Author author={author} />
					<div>
						<em>
							<strong>Published on</strong>: {formatDate(date)}
						</em>
					</div>
				</div>
			</div>
		</div>
	);
}
