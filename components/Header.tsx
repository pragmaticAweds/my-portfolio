import React from "react";

const Header = () => {
  return (
    <header>
      <span className="font-semibold text-xl mb-2">Hi, my name is</span>
      <h3 className="text-[4rem] leading-[4rem]">Abdulafeez Jimoh.</h3>
      <h3 className="text-5xl">I use technology to solve human problems.</h3>
      <p className="text-xl max-w-[85%] text-justify w-full mt-6">
        I am a front-end software engineer with over one and a half years of
        experience. I build visually appealing and user-friendly platforms that
        is fully responsive adapting to various screen sizes and devices. I am
        dedicated to delivering high-quality results that meet your specific
        needs and exceed your expectations.
      </p>
      <p className="text-xl max-w-[85%] w-full mt-6">
        I am pragmatic in nature when it comes to problem solving, because
        delivering result that solves user problem in the most efficient way is
        what matters to me.
      </p>
      <button>Get in touch</button>
    </header>
  );
};

export default Header;
