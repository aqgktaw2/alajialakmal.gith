import Image from "next/image";
import Link from "next/link";

import { Blob1, Blob2, Blob3, Blob4, Blob5, Blob6 } from "@/components/blobs";

const shapes = [
	<Blob1 key={1} />,
	<Blob2 key={2} />,
	<Blob3 key={3} />,
	<Blob4 key={4} />,
	<Blob5 key={5} />,
	<Blob6 key={6} />,
];

const SnippetCard = ({ post }) => {
	return (
		<div data-gsap="reveal-bottom" className="snippet-card">
			<div className="snippet-card__shape">{shapes[Math.floor(Math.random() * shapes.length)]}</div>

			<Link href={`/snippets/${post.slug}`} passHref>
				<a className="snippet-card__body">
					<div className="snippet-card__image">
						<Image src={post.coverImage} layout="fill" />
					</div>

					<div className="snippet-card__info">
						<h3>{post.title}</h3>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default SnippetCard;
