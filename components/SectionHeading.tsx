import React from "react";

const SectionHeading = ({
  id,
  section,
  desc,
}: {
  id: number;
  section: string;
  desc: string;
}) => {
  return (
    <div className=" flex items-end mb-12" id={section}>
      <span className="font-[satisfy] mr-1 ttext">0{id}.</span>
      <div className="flex items-center w-full gap-x-8">
        <span className="font-semibold text-2xl">{desc}</span>
        <span className="bg-black h-[0.0625rem] w-[40%]"></span>
      </div>
    </div>
  );
};

export default SectionHeading;
