import { getCollection } from "astro:content"

export const getTags = async () => {
	const posts = await getCollection('blog')
	const tags = new Set()
	posts.forEach((post) => {
		post.data.tags?.forEach((tag) => {
			tags.add(tag.toLowerCase())
		})
	})

	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	const posts = await getPosts()
	const lowercaseTag = tag.toLowerCase()
	return posts.filter((post) => {
		return post.data.tags?.some((postTag) => postTag.toLowerCase() === lowercaseTag)
	})
}

export const getPosts = async (max?: number) => {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}