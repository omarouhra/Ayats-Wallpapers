import React from "react";
import IconLink from "../core/IconLink";
// import IconLink from "../core/IconLink";
// import Title from "../core/Title";

function Footer() {
  return (
    <footer className='py-8 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0' >
      <p className="text-gray-500 dark:text-gray-100 ">Built & designed by <strong>Omar Ouhra</strong>  in 🇲🇦 </p>
      <div className="flex space-x-4 justify-between w-full max-w-xs md:justify-end">
        <IconLink label="Github" />
        <IconLink label="Twitter" />
        <IconLink label="Linkedin" />
      </div>
    </footer >
  );
}

export default Footer;
