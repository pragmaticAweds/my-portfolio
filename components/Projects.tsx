import Image from "next/image";
import React from "react";
import ArrowRight from "./vectors/ArrowRight";

const Projects = () => {
  const projects = [
    {
      title: "project title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
      img1: "/imgs/art-1.webp",
      img2: "/imgs/art-2.webp",
    },
  ];
  return (
    <div className="project center" id="projects">
      {projects.map((project, i) => (
        <div key={"project-key" + i} className="sub-project">
          <div className="absolute h-full w-3/5 top-0 right-[20%] z-10">
            <Image
              src={project.img1}
              alt={project.title}
              fill
              quality={100}
              className="object-contain"
            />
          </div>
          <div className="absolute h-full w-1/2 top-0 right-0">
            <Image
              src={project.img2}
              alt={project.title}
              fill
              quality={100}
              className="object-contain"
            />
          </div>
          <div className="bg-black w-[21rem] text-white p-8 -ml-[25%] gap-y-4 flex flex-col">
            <h2 className="text-2xl font-semibold capitalize">
              {project.title}
            </h2>
            <p className="font-light">{project.desc}</p>
            <span className="text-sm font-bold cursor-pointer flex items-center gap-x-1">
              View Project <ArrowRight />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
