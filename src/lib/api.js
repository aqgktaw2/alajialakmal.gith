import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectories = {
	posts: join(process.cwd(), "_posts", "posts"),
	snippets: join(process.cwd(), "_posts", "snippets"),
	projects: join(process.cwd(), "_posts", "projects"),
};

export function getPostsFilenames(postType) {
	return fs.readdirSync(postsDirectories[postType]);
}

export function getPostBySlug({ slug, fields = [], postType }) {
	// If passed in a filename, need to parse real slug
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectories[postType], `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return fields.reduce((acc, field) => {
		field === "slug" && (acc[field] = realSlug);
		field === "content" && (acc[field] = content);
		data[field] && (acc[field] = data[field]);
		return acc;
	}, {});
}

export function getAllPosts({ fields = [], postType = "posts" }) {
	const filenames = getPostsFilenames(postType);
	const posts = filenames
		.map(filename => getPostBySlug({ slug: filename, fields, postType }))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}

export const getAllTags = ({ postType }) => {
	return [
		...new Set(
			getAllPosts({
				fields: ["tags"],
				postType,
			})
				.map(post => post.tags)
				.flat(),
		),
	];
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
