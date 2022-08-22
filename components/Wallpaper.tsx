import React from 'react'
import BluryImage from './core/BluryImage'
import Link from 'next/link'
import { StaticImageData } from 'next/image';
import wallpaper from '../public/wallpapers/v1.png'





type ImageProps = {
    alt: string;
    imgSrc: StaticImageData | string | any;

};
function Wallpaper({ imgSrc, alt }: ImageProps) {
    return (
        <a download="wallpaper.png" href='/public/wallpapers/v1.png' className=' w-full  flex flex-col space-y-4 group '>
            <div className="w-full  h-[250px] hover:shadow-xl hover:scale-[1.01] transition duration-300 ">
                <BluryImage imgSrc={ imgSrc } alt={ alt } className='rounded-md ' />
            </div>
            <span className='md:opacity-0 md:oapcity-100 group-hover:md:opacity-100 group-hover:translate-x-1 font-semibold transition duration-200'>
                Download
            </span>
        </a>
    )
}

export default Wallpaper