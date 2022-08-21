import React from "react";
import BluryImage from "../core/BluryImage";
import developer from '../../public/dev.png'
import IconLink from "../core/IconLink";
// import IconLink from "../core/IconLink";
// import Title from "../core/Title";

function Footer() {
  return (
    <footer className='py-16 flex items-center justify-between' >
      {/* <Title title="Contact" /> */ }
      <div className="flex space-x-4 items-center justify-center">
        <div className="relative w-[70px] h-[70px] shadow bg-gray-100 dark:bg-white rounded-md ">
          <BluryImage imgSrc={ developer } alt='developer Omar Ouhra' />
        </div>
        <div>
          <p className="font-normal text-2xl">Omar Ouhra</p>
          <span className="text-sm font-light text-gray-500 dark:text-gray-100">Frontend Engineer</span>
        </div>
      </div>

      <div className="flex space-x-4">
        <IconLink label="Github" />
        <IconLink label="Twitter" />
        <IconLink label="Linkedin" />
      </div>
    </footer >
  );
}

export default Footer;
