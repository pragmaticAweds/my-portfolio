import Image from "next/image";
import clsx from "clsx";
import ArrowRight from "./vectors/ArrowRight";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  const projects = [
    {
      title: "project title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
      img1: "/imgs/art-1.webp",
      img2: "/imgs/art-2.webp",
    },
    {
      title: "project title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
      img1: "/imgs/art-1.webp",
      img2: "/imgs/art-2.webp",
    },
    {
      title: "project title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
      img1: "/imgs/art-1.webp",
      img2: "/imgs/art-2.webp",
    },
    {
      title: "project title",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
      img1: "/imgs/art-1.webp",
      img2: "/imgs/art-2.webp",
    },
  ];
  return (
    <>
      <SectionHeading id={3} section="works" desc="Some Things I've Built" />

      <div className="space-y-28">
        {projects.map((project, i) => (
          <div
            key={"project-key" + i}
            className={clsx("sub-project", i % 2 === 0 ? "mr-auto" : "ml-auto")}
          >
            <div className="relative h-full w-full">
              <Image
                src={project.img1}
                alt={project.title}
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            <div
              className={clsx(
                "w-[65%] text-white hover:text-black hover:shadow p-8 gap-y-4 flex flex-col absolute top-[15%] bg-black hover:bg-txt-grey cursor-pointer",
                i % 2 === 0
                  ? "-right-[55%] items-end"
                  : "-left-[50%] items-start"
              )}
            >
              <h2 className={clsx("text-2xl font-semibold capitalize")}>
                {project.title}
              </h2>
              <p
                className={clsx(
                  "font-light",
                  i % 2 === 0 ? "text-right" : "text-left"
                )}
              >
                {project.desc}
              </p>
              <span className="text-sm font-bold cursor-pointer flex items-center gap-x-1">
                View Project <ArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
