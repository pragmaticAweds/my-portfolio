import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="hero-img">
        <Image
          src="/imgs/avatar.webp"
          alt="hero-img"
          quality={100}
          width={120}
          height={120}
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-medium text-lg">Hello, I&apos;m</span>
        <h3 className="text-5xl font-bebas">Abdulafeez Jimoh</h3>
        <h3 className="text-6xl text-[#B9B9B9] font-bebas">
          Front-end Engineer
        </h3>
      </div>
    </header>
  );
};

export default Header;
