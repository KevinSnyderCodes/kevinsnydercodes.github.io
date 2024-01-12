import React from "react";

import BlogItem from "@/components/BlogItem";

import { getSortedPostsData } from "@/lib/posts";

const Blog: React.FC = () => {
  const posts = getSortedPostsData();

  return (
    <main className="min-h-screen">
      <div className="w-full h-screen bg-zinc-700 text-white">
        <div className="container mx-auto h-full">
          <div className="flex flex-col w-full h-full p-24">
            {posts.map((props, i) => (
              <BlogItem key={i} {...props} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
