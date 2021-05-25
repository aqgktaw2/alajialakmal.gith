---
title: "dennyh.me"
excerpt: "At the beginning of 2021, I re-built this site with Next.js, Sass, and Markdown to include blogging functionalities. I want to start sharing my interests and grow my technical communication skills through the process."
coverImage: "/assets/projects/dennyh/dennyh.png"
clientUrl: "https://dennyh.me"
date: 2021-03-11T02:12:58.650Z
author:
  name: Denny Hong
  picture: "/assets/authors/denny-hong.jpeg"
ogImage:
  url: "/assets/projects/dennyh/dennyh.png"
tags:
  - "React"
  - "NextJs"
  - "Sass"
  - "NodeJs"
type: "projects"
---

<!-- ARTICLE OVERVIEW -->
<blockquote>
  <h3>Table of contents:</h3>
  <ul>
    <li>
      <h5><a href='#Architecture Choice'>Architecture Choice</a></h5>
    </li>
    <li>
      <h5><a href="#Accessibility">Accessibility</a></h5>
    </li>
    <li>
      <h5><a href="#SEO">SEO</a></h5>
    </li>
    <li>
      <h5><a href="#API Route">API Route</a></h5>
    </li>
  </ul>
</blockquote>
<!-- END ARTICLE OVERVIEW -->

<h2 id="Architecture Choice">Architecture Choice</h2>

For my site, I bacially wanted a blog that is accessible, SEO friendly, and has three "post types", being "articles", "snippets", and "projects". At the same time, I want to have fun working on it, so the developer's experience should be enjoyable. To achieve all that, I followed the modern "JAM Stack" architecture. I picked Next.js as my Static Site Generator(SSG). At build time, it is pulling in blog content data from Markdown files with the "getStaticProps" and "getStaticPaths" functions, then using the "frontmatter" library to parse meta information such as "post types" and "post tags". Lastly, I map the blog post data to the page with React. You might noticed I also tried to integrate some animation here and there to spice up the experience.

An example of fetching blog article content data at built time -

```JavaScript
export async function getStaticProps({ params }) {
	// Get the content and meta of current post
	const post = getPostBySlug({
		slug: params.slug,
		fields: [ ...fieldsToGet ],
		postType: "posts",
	});
	const content = await markdownToHtml(post.content || "");

	// List at most 3 related posts
	const relatedPosts = getAllPosts({
		fields: [...relatedPostsFields ],
		postType: "posts",
	})
		.filter(
			otherPost =>
				otherPost.slug !== post.slug && otherPost.tags.find(tag => otherPost.tags.includes(tag)),
		)
		.slice(0, 3);

	return {
		props: {
			post: { ...post, content },
			relatedPosts,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	// List all posts' slugs
	const posts = getAllPosts({ fields: [ "slug" ], postType: "posts" });

	return {
		paths: posts.map(post => {
			return {
				params: { slug: post.slug },
			};
		}),
		fallback: false,
	};
}
```

<h2 id="Accessibility">Accessibility</h2>

I tried to take advantage of the accessibility-related knowledge that I've learned on the job. Beyond making sure images have proper alt text, using semantic HTML elements, I also implemented a "skip link" component, made sure the site is keyboard navigatable, and paid extra attention to "focus management".

<h2 id="SEO">SEO</h2>

My knowledge of SEO has also been broadened on the job, and I want to reflect that on this project. Thanks to the Static Site Generation feature of Next.js, and Vercel's edge network, this whole site's markup is pre-built and cached at the CDN layer and sent to the user's browser on request. So out of the box, the SEO is already better than "Vanilla" create react app type of Client Side Rendering(CSR) projects.

Moreover, I created a "Meta" component that wraps around the "Head" component provided by Next.js, including a list of default meta information such as title, meta description, canonical URL, and open graph tags, etc. On any page (or component), I can import that "Meta" component and dynamically pass in props to overwrite the default and meta information. I used this technique for dynamic routes such as blog articles, code snippets, and project pages.

The "Meta" component -

```JavaScript
export default function Meta({
	title = "Denny Hong | Web and JavaScript Developer",
	description = "Denny Hong is a web developer and JavaScript developer based in Seattle, WA.",
	ogImage = "/home-ogimg.jpg",
}) {
	const router = useRouter();

	return (
		<Head>
			<meta name="theme-color" content="#07000b" />
			<meta name="msapplication-TileColor" content="#07000b" />

			<title>{title}</title>

			<meta name="description" content={description} />
			<link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`} />

			{/* Open Graph */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" href={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`} />
			<meta property="og:site_name" content="Denny Hong | Blog and Portfolio" />
			<meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}${ogImage}`} />
			<meta
				property="og:image:secure_url"
				content={`${process.env.NEXT_PUBLIC_DOMAIN}${ogImage}`}
			/>
			<meta property="og:image:type" content="image/jpg" />
		</Head>
	);
}
```

<h2 id="API Route">API Route</h2>

I also utilized the "API Route" feature of Next.js and built a newsletter subscribe cloud function with Mailchimp's "members" API. I have a detailed ["Code Snippet"](https://dennyh.me/snippets/mailchimp-subscribe) that walks through the steps on how I built it out. Vercel has really made deploying cloud functions in Next.js project a breeze. (No more configuring API Gateways!😀)

If you are looking for a similar site and don't want to start from scratch, you can use this site as a starting point.
You can deploy this exact site with Vercel in seconds -

<a target="_blank" rel="noreferrer noopener" href="https://vercel.com/new/git/external?repository-url=https://github.com/dennyhong96/denny-hong" rel="nofollow"><img src="https://camo.githubusercontent.com/5e471e99e8e022cf454693e38ec843036ec6301e27ee1e1fa10325b1cb720584/68747470733a2f2f76657263656c2e636f6d2f627574746f6e" alt="Deploy with Vercel" data-canonical-src="https://vercel.com/button" style="max-width:100%;"></a>
