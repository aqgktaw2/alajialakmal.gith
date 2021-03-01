import fs from "fs";
import { Feed } from "feed";

import { getAllPosts } from "./api";
import markdownToHtml from "./markdownToHtml";

const generateRssFeed = async () => {
	const author = {
		name: "Denny Hong",
		email: "hong961127@gmail.com",
		link: "https://twitter.com/DennyHong3",
	};

	const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
	const date = new Date();
	const feed = new Feed({
		title: `Denny Hong's Blog`,
		description: "Welcome to Denny Hong's blog!",
		id: baseUrl,
		link: baseUrl,
		language: "en",
		image: `${baseUrl}/logo.svg`,
		favicon: `${baseUrl}/favicon-196.png`,
		copyright: `All rights reserved ${date.getFullYear()}, Denny Hong.`,
		updated: date,
		generator: "Next.js, using Feed for Node.js",
		feedLinks: {
			rss2: `${baseUrl}/rss/feed.xml`,
			json: `${baseUrl}/rss/feed.json`,
			atom: `${baseUrl}/rss/atom.xml`,
		},
		author,
	});

	const allBlogPosts = getAllPosts({
		fields: ["title", "date", "slug", "excerpt", "content", "type"],
		postType: "posts",
	});

	const allSnippets = getAllPosts({
		fields: ["title", "date", "slug", "excerpt", "content", "type"],
		postType: "snippets",
	});

	const posts = [...allBlogPosts, ...allSnippets];

	await Promise.all(
		posts.map(async post => {
			const url = `${baseUrl}/${post.type}/${post.slug}`;
			const postHtml = await markdownToHtml(post.content);

			return feed.addItem({
				title: post.title,
				id: url,
				link: url,
				description: post.excerpt,
				content: postHtml,
				author: [author],
				contributor: [author],
				date: new Date(post.date),
			});
		}),
	);

	fs.mkdirSync("./public/rss", { recursive: true });
	fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
	fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
	fs.writeFileSync("./public/rss/feed.json", feed.json1());
};

export default generateRssFeed;
