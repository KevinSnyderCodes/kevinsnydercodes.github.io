import React from "react";

import TextLink from "@/components/TextLink";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-900 text-gray-500">
      <div className="container mx-auto">
        <div className="flex flex-col items-center p-8">
          <p className="text-xs">&copy; 2024 Kevin Snyder</p>
          <p className="text-xs">
            Powered by <TextLink href="https://nextjs.org/">Next.js</TextLink>,{" "}
            <TextLink href="https://tailwindcss.com/">Tailwind CSS</TextLink>,{" "}
            <TextLink href="https://pages.github.com/">GitHub Pages</TextLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
