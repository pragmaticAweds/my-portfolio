import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";

const AboutMe = () => {
  //    At leisure, I spend time learning new technologies, solving DSA, and
  //     finding better ways to optimize code for better performance.
  return (
    <>
      <SectionHeading id={1} desc="About me" section="about" />
      <section className="grid grid-cols-[0.6fr_0.35fr] h-[70vh] place-content-start justify-between">
        <div className="text-xl flex flex-col gap-y-4">
          🇳
          <p>
            Hello! I&apos;m Abdulafeez{" "}
            <span className="font-satisfy">
              alias &apos;pragmaticAweds&apos;👨🏾‍💻
            </span>
            , a software engineer from Nigeria🇳🇬.
          </p>
          <p>
            I am a front-end software engineer with over one and a half years of
            experience. I build visually appealing and user-friendly platforms
            and apps that effectively communicate your business&apos;s unique
            value proposition to potential clients, that is fully responsive
            adapting to various screen sizes and devices. I am dedicated to
            delivering high-quality results that meet your specific needs and
            exceed your expectations.
          </p>
        </div>
        <div className="hero-img">
          <Image src="/imgs/pp.webp" alt="hero-img" quality={100} fill />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
