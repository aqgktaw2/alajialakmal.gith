export default function PostBody({ content }) {
	return (
		<div className="post-body">
			<div className="post-body__inner" dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}
