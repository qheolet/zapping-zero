import { getCollection } from "astro:content";

function hasCommonElement(array1: string[], array2: string[]) {
  // Convert arrays to Sets for efficient intersection check
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  // Check if there is any common element
  for (const element of set1) {
    if (set2.has(element)) {
      return true; // Found a common element
    }
  }

  return false; // No common elements found
}

export const getTags = async () => {
  const posts = await getCollection("blog");
  const tags = new Set();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      tags.add(tag.toLowerCase());
    });
  });

  return Array.from(tags);
};

export const getPostByTag = async (tag: string) => {
  const posts = await getPosts();
  const lowercaseTag = tag.toLowerCase();
  return posts.filter((post) => {
    return post.data.tags?.some(
      (postTag) => postTag.toLowerCase() === lowercaseTag
    );
  });
};

export const getPosts = async (max?: number) => {
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max);
};

export const getRelatePost = async (
  tags: string[],
  slug: string,
  n: number = 2
) => {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const r = [];
  for (let p of posts) {
    if (p.slug !== slug && hasCommonElement(tags, p.data.tags || [])) {
      r.push({
        name: p.data.title,
        link: `/blog/${p.slug}`,
      });
      if (r.length == n) return r;
    }
  }

  return r;
};
