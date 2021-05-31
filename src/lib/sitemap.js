import fs from "fs";
import globby from "globby";
import prettier from "prettier";

import { listAllTags } from "./api";

const generateSitemap = async () => {
	const prettierConfig = await prettier.resolveConfig(".prettierrc");
	let pages = await globby([
		"src/pages/*.js",
		"_posts/**/*.md",
		"!src/pages/_*.js",
		"!src/pages/api",
	]);

	const listings = ["/posts", "/projects", "/snippets"];
	const topicPages = listAllTags({ postType: "posts" }).map(tag => `/topics/${tag}`);
	const repositoriesPages = listAllTags({ postType: "snippets" }).map(
		tag => `/repositories/${tag}`,
	);
	const technologiesPages = listAllTags({ postType: "projects" }).map(
		tag => `/technologies/${tag}`,
	);
	pages = [...pages, ...listings, ...topicPages, ...repositoriesPages, ...technologiesPages];

	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
							.map(page => {
								const path = page
									.replace("src/pages", "")
									.replace("_posts", "")
									.replace(".js", "")
									.replace(".md", "");
								const route = path === "/index" ? "" : path;
								return `
                        <url>
                            <loc>${`${process.env.NEXT_PUBLIC_DOMAIN}${route}`}</loc>
                        </url>
                    `;
							})
							.join("")}
        </urlset>
    `;

	const formattedHTMLString = prettier.format(sitemap, {
		...prettierConfig,
		parser: "html",
	});

	fs.writeFileSync("public/sitemap.xml", formattedHTMLString);
};

export default generateSitemap;
