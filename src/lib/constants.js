import IconGithub from "@/components/IconGithub";
import IconTwitter from "@/components/IconTwitter";
import IconEmail from "@/components/IconEmail";

export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Markdown";
export const HOME_OG_IMAGE_URL =
  "https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

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

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Blog" },
  { href: "/snippets", label: "Snippets" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];
