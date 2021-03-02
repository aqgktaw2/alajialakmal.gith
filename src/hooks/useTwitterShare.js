import { useRouter } from "next/router";

const TWITTER_INTENT_BASE_LINK = "https://twitter.com/intent/tweet";

const useTwitterShare = ({ title, tags }) => {
	const router = useRouter();

	const params = {
		url: `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`,
		text: title,
		via: "DennyHong3",
		hashtags: tags.join(","),
	};

	const twitterShareUrl = Object.entries(params).reduce((acc, [key, val], idx) => {
		acc += idx === 0 ? "?" : "&";
		acc += `${key}=${encodeURIComponent(val)}`;
		return acc;
	}, TWITTER_INTENT_BASE_LINK);

	return { twitterShareUrl };
};

export default useTwitterShare;
