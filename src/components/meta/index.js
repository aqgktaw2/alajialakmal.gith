import Head from "next/head";

import { useRouter } from "next/router";

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
