const getherAllTags = (allPosts) => [...new Set(allPosts.map((post) => post.tags).flat())];

export default getherAllTags;
