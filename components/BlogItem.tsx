import React from "react";

type Props = {
  id: string;
  title: string;
  date: Date;
};

const BlogItem: React.FC<Props> = ({ title, date }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl">{title}</h1>
      <h2 className="text-sm italic">
        {date.toLocaleDateString("en-US", { timeZone: "UTC" })}
      </h2>
    </div>
  );
};

export default BlogItem;
