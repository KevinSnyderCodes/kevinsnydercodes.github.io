import React from "react";

import Markdown from "react-markdown";

import { getSortedPostsData, getPostByID } from "@/lib/posts";

type Params = {
  id: string;
};

export const generateStaticParams = (): Params[] => {
  const posts = getSortedPostsData();

  return posts.map(({ id }) => ({
    id,
  }));
};

type Props = {
  params: Params;
};

const BlogPost: React.FC<Props> = ({ params }) => {
  const { title, date, content } = getPostByID(params.id);

  return (
    <main className="min-h-screen">
      <div className="w-full h-screen bg-zinc-700 text-white">
        <div className="mx-auto h-full max-w-3xl">
          <div className="flex flex-col w-full h-full p-24">
            <article className="mt-8 prose prose-invert">
              <h1>{title}</h1>
              <figcaption>
                {date.toLocaleDateString("en-US", { timeZone: "UTC" })}
              </figcaption>
              <Markdown>{content}</Markdown>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
