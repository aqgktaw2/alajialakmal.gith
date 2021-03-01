import { useEffect, useState } from "react";

import throttle from "@/utils/throttle";

const BlogProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleProgress = throttle(function () {
			const documentHeight = Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight,
			);
			const scrollTop = window.pageYOffset;
			const windowHeight = window.innerHeight;
			const progress = `${(scrollTop / (documentHeight - windowHeight)) * 100}%`;
			setProgress(progress);
		}, 50);
		handleProgress();

		window.addEventListener("scroll", handleProgress);
	}, []);

	return <div className="blog-progress" style={{ width: progress }} />;
};

export default BlogProgress;
