import React from "react";
import IconLink from "../core/IconLink";

function Footer() {
  return (
    <footer className='py-8 flex flex-col md:flex-row items-start justify-between space-y-12 md:space-y-0' >
      <div className="flex space-x-4 justify-start w-full max-w-xs ">
        <IconLink label="Github" href="https://github.com/omarouhra" />
        <IconLink label="Twitter" href='https://twitter.com/OuhraOmar' />
        <IconLink label="Linkedin" href="https://www.linkedin.com/in/omar-ouhra/" />
      </div>
      <p className="text-gray-500 dark:text-gray-100 ">Built & designed by <strong>Omar Ouhra</strong>  in 🇲🇦 </p>
    </footer >
  );
}

export default Footer;
