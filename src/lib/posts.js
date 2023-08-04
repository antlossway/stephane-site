import { compileMDX } from "next-mdx-remote/rsc"; //support for react server component
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import Video from "@/components/Video";
import Button from "@/components/Button";
import LinkToNewTab from "@/components/LinkToNewTab";
import { s } from "hastscript";

export async function getPostByName(fileName) {
  const res = await fetch(
    `https://raw.githubusercontent.com/antlossway/blogposts/main/${fileName}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const rawMDX = await res.text(); // note that it's not json(), it's text()
  //   console.log("debug rawMDX: ", rawMDX.substring(1, 100));
  if (rawMDX === "404: Not Found") return undefined;

  const { frontmatter, content } = await compileMDX({
    source: rawMDX,
    components: {
      Video,
      Button,
      LinkToNewTab,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              content: [
                s(
                  "svg.autolink-svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                  },
                  s("path", {
                    d: "M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z",
                  })
                ),
              ],
            },
          ],
        ],
      },
    },
  });

  const slug = fileName.replace(/\.mdx$/, "");

  // console.log("debug frontmatter: ", frontmatter)

  const blogPostObj = {
    meta: {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      description: frontmatter.description,
      tags: frontmatter.tags,
    },
    content,
  };

  //   console.log("debug meta: ", blogPostObj.meta);

  return blogPostObj;
}

export async function getPostsMeta() {
  const res = await fetch(
    "https://api.github.com/repos/antlossway/blogposts/git/trees/main?recursive=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return undefined;

  const repoFiletree = await res.json();
  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"))
    .filter((path) => path !== "bookmark.mdx");

  const posts = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);
    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
