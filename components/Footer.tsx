import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-900 text-gray-500">
      <div className="container mx-auto">
        <div className="flex flex-col items-center p-8">
          <p className="text-xs">&copy; 2024 Kevin Snyder</p>
          <p className="text-xs">
            Powered by Next.js, Tailwind, and GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
