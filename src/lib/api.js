import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import yaml from "js-yaml";

const DIR_MAP = {
	posts: path.join(process.cwd(), "_posts", "posts"),
	snippets: path.join(process.cwd(), "_posts", "snippets"),
	projects: path.join(process.cwd(), "_posts", "projects"),
	pages: path.join(process.cwd(), "_pages"),
};

const parseMarkdown = markdown => {
	// https://github.com/jonschlinkert/gray-matter/issues/62#issuecomment-577628177
	const { data, content } = matter(markdown, {
		engines: {
			yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
		},
	});

	return { data, content };
};

export function listPostMarkdownFilenames(postType) {
	return fs.readdirSync(DIR_MAP[postType]);
}

export function getPostBySlug({ slug, fields = [], postType }) {
	// If passed in a filename, need to parse real slug
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = path.join(DIR_MAP[postType], `${realSlug}.md`);
	const markdown = fs.readFileSync(fullPath, "utf8");

	const { data, content } = parseMarkdown(markdown);

	return fields.reduce((acc, field) => {
		field === "slug" && (acc[field] = realSlug);
		field === "content" && (acc[field] = content);
		data[field] && (acc[field] = data[field]);
		field === "readTime" && (acc[field] = readingTime(content).text);
		return acc;
	}, {});
}

export function listAllPosts({ fields = [], postType = "posts" }) {
	const filenames = listPostMarkdownFilenames(postType);
	const posts = filenames
		.map(filename => getPostBySlug({ slug: filename, fields, postType }))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}

export const listAllTags = ({ postType }) => {
	return [
		...new Set(
			listAllPosts({
				fields: ["tags"],
				postType,
			})
				.map(post => post.tags)
				.flat(),
		),
	];
};

export const getPageBySlug = ({ slug }) => {
	const fullPath = path.join(DIR_MAP.pages, `${slug}.md`);
	const pageContent = fs.readFileSync(fullPath, "utf8");

	const { data } = parseMarkdown(pageContent);

	return data;
};

// Subscribe to newsletter
export async function subscribe({ email, onSuccess, onError }) {
	try {
		const res = await fetch("/api/subscribe", {
			method: "POST",
			body: JSON.stringify({ email }),
		});

		const { success, message } = await res.json();
		if (!success) {
			throw new Error(message);
		}

		onSuccess(message);
	} catch (error) {
		onError(error.message);
	}
}
