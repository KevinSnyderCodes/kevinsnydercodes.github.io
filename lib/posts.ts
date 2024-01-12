import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { z } from "zod";

const PostData = z.object({
  id: z.string(),
  title: z.string(),
  date: z.date(),
  content: z.string(),
});

type PostData = z.infer<typeof PostData>;

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    const data = PostData.parse({
      id,
      ...matterResult.data,
      content: matterResult.content,
    });

    return data;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostByID(id: string) {
  const fileName = `${id}.md`;

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const data = PostData.parse({
    id,
    ...matterResult.data,
    content: matterResult.content,
  });

  return data;
}
