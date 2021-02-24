import Head from "next/head";

import { useRouter } from "next/router";

export default function Meta() {
	const router = useRouter();
	console.log(`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`);

	return (
		<Head>
			<meta name="theme-color" content="#07000b" />
			<meta name="msapplication-TileColor" content="#07000b" />

			<title>Denny Hong | Web & JavaScript Developer</title>
			<meta
				name="description"
				content="Denny Hong is a web developer & JavaScript developer based in Seattle, WA."
			/>
			<link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`} />

			{/* Open Graph */}
			<meta property="og:title" content="Denny Hong | Web & JavaScript Developer" />
			<meta
				property="og:description"
				content="Denny Hong is a web developer & JavaScript developer based in Seattle, WA."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" href={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`} />
			<meta property="og:site_name" content="Denny Hong | Blog and Portfolio" />
			<meta
				property="og:image"
				content={`${process.env.NEXT_PUBLIC_DOMAIN}/home-ogimg.jpg`}
			/>
			<meta
				property="og:image:secure_url"
				content={`${process.env.NEXT_PUBLIC_DOMAIN}/home-ogimg.jpg`}
			/>
			<meta property="og:image:type" content="image/jpg" />

			{/* Responsive Vewport */}
			{/* <meta name="viewport" content="initial-scale=1, viewport-fit=cover, user-scalable=no" /> */}
			<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />

			{/* IOS Translucent Status Bar */}
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

			{/* Web Manifest */}
			<link rel="manifest" href="/site.webmanifest" />

			{/* Google Fonts */}
			{/* <link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
				rel="stylesheet"
			/> */}

			{/* PWA ASSETS */}
			<link rel="icon" type="image/png" sizes="196x196" href="/favicon-196.png" />
			<link rel="apple-touch-icon" href="/apple-icon-180.png" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2048-2732.jpg"
				media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2732-2048.jpg"
				media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1668-2388.jpg"
				media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2388-1668.jpg"
				media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1536-2048.jpg"
				media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2048-1536.jpg"
				media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1668-2224.jpg"
				media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2224-1668.jpg"
				media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1620-2160.jpg"
				media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2160-1620.jpg"
				media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1284-2778.jpg"
				media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2778-1284.jpg"
				media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1170-2532.jpg"
				media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2532-1170.jpg"
				media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1125-2436.jpg"
				media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2436-1125.jpg"
				media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1242-2688.jpg"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2688-1242.jpg"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-828-1792.jpg"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1792-828.jpg"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1242-2208.jpg"
				media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2208-1242.jpg"
				media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-750-1334.jpg"
				media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1334-750.jpg"
				media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-640-1136.jpg"
				media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1136-640.jpg"
				media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
		</Head>
	);
}
