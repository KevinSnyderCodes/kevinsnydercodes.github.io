"use client";

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const useIsVisible = (ref: React.RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

type ProjectTileProps = {
  title: string;
  imageSrc?: string;
  description: string;
  technologies: string[];
  status: string;
};

const ProjectTile: React.FC<ProjectTileProps> = ({
  title,
  imageSrc,
  description,
  technologies,
  status,
}) => {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsShown(true);
    }
  }, [isVisible]);

  console.log(isVisible);

  const image = (() => {
    if (imageSrc) {
      return (
        <Image src={imageSrc} alt="Image" fill style={{ objectFit: "cover" }} />
      );
    }
    return (
      <div className="w-full h-full bg-white flex justify-center">
        <FontAwesomeIcon
          icon={faImage}
          className="w-8 h-8 text-gray-200 m-auto"
        />
      </div>
    );
  })();

  return (
    <div ref={ref} className={`flex w-full p-8 `}>
      <div
        className={`aspect-video h-64 ${
          isShown ? "animate-fade-in-left" : "opacity-0"
        }`}
      >
        <div className="w-full h-full relative rounded-2xl overflow-hidden">
          {image}
        </div>
      </div>
      <div
        className={`pl-8 ${isShown ? "animate-fade-in-right" : "opacity-0"}`}
      >
        <h1 className="text-3xl font-semibold pt-4">{title}</h1>
        <p className="pt-4 whitespace-pre-wrap">{description}</p>
        <p className="text-sm italic pt-8">
          <span className="font-bold">Technologies:</span>{" "}
          {technologies.join(", ")}
        </p>
        <p className="text-sm italic">
          <span className="font-bold">Status:</span> {status}
        </p>
      </div>
    </div>
  );
};

const projects: ProjectTileProps[] = [
  {
    title: "Seattle University Campus Map",
    imageSrc: "/seattleu.png",
    description: `An interactive campus map built in 2014 for my university's website while I was a student there.
My first professional project.`,
    technologies: ["Google Maps", "jQuery"],
    status: "Still In Use!",
  },
  {
    title: "Killer Queen Stats",
    imageSrc: "/kqstats.png",
    description: `Visualize statistics from your Killer Queen arcade cabinet in real-time!
Used by Twitch streamers and tournament organizers.
Seen by hundreds of viewers during Red Bull Hive Hustle 2019.`,
    technologies: ["TypeScript", "React", "WebSockets"],
    status: "Replaced by HiveMind",
  },
  {
    title: "OpenAtlas",
    description: `An open-source platform for provisioning infrastructure using Terraform.
Implements the Terraform Cloud API and offers an alternative platform that is free to use.`,
    technologies: ["Go", "PostgreSQL", "Redis", "TypeScript", "React"],
    status: "In Development",
  },
  {
    title: "Buff",
    description: `A workout tracker that helps you get in shape.
Delightful to use and great for beginners.`,
    technologies: ["React Native", "sqlite"],
    status: "In Development",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-zinc-700 text-white">
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center p-24">
            <div className="rounded-full overflow-hidden">
              <Image src="/me.jpg" alt="Logo" width={240} height={240} />
            </div>
            <h1 className="text-5xl font-bold mt-8">Kevin Snyder</h1>
            <h2 className="text-2xl mt-4">Software Engineer</h2>
            <h3 className="text-xl">San Francisco, CA</h3>
          </div>
        </div>
      </div>
      <div className="pt-24 pb-24 bg-sky-700 text-white">
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center">
            <h1 className="text-4xl font-bold">Projects</h1>
            {projects.map((props, i) => (
              <ProjectTile key={i} {...props} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
