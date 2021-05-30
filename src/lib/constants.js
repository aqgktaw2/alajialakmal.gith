import IconGithub from "@components/icons/IconGithub";
import IconTwitter from "@components/icons/IconTwitter";
import IconEmail from "@components/icons/IconEmail";
import {
	IconAws,
	IconCss,
	IconFirebase,
	IconGraphql,
	IconHtml,
	IconHubspot,
	IconJs,
	IconNextjs,
	IconNode,
	IconPhp,
	IconReact,
	IconRedux,
	IconSass,
	IconShopify,
	IconWordpress,
	IconGrad,
	IconCode,
	IconJsWhite,
	IconWeb,
} from "@components/icons";

export const EXAMPLE_PATH = "blog-starter";

export const SOCIAL_ITEMS = [
	{
		href: "https://github.com/dennyhong96",
		icon: <IconGithub width="3rem" height="3rem" />,
		label: "Github",
	},
	{
		href: "https://twitter.com/DennyHong3",
		icon: <IconTwitter width="3rem" height="3rem" />,
		label: "Twitter",
	},
	{
		href: "mailto:hong961127@gmail.com",
		icon: <IconEmail width="3rem" height="3rem" />,
		label: "Email",
	},
];

export const SOCIAL_ICON_MAP = {
	Github: <IconGithub width="3rem" height="3rem" />,
	Twitter: <IconTwitter width="3rem" height="3rem" />,
	Email: <IconEmail width="3rem" height="3rem" />,
};

export const NAV_ITEMS = [
	{ href: "/", label: "Home" },
	{ href: "/posts", label: "Blog" },
	{ href: "/snippets", label: "Snippets" },
	{ href: "/projects", label: "Projects" },
	{ href: "/about", label: "About" },
];

export const TECH_ICONS = {
	CSS: <IconCss />,
	Sass: <IconSass />,
	HTML: <IconHtml />,
	JavaScript: <IconJs />,
	Nextjs: <IconNextjs />,
	React: <IconReact />,
	Redux: <IconRedux />,
	HubSpot: <IconHubspot />,
	PHP: <IconPhp />,
	WordPress: <IconWordpress />,
	Firebase: <IconFirebase />,
	GraphQL: <IconGraphql />,
	Shopify: <IconShopify />,
	NodeJs: <IconNode />,
	AWS: <IconAws />,
};

export const TIMELINE_ICONS = {
	Globe: <IconWeb />,
	JavaScript: <IconJsWhite />,
	Code: <IconCode />,
	Grad: <IconGrad />,
};
