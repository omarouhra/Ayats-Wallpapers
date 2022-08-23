import React from 'react'
import BluryImage from './core/BluryImage'
import { StaticImageData } from 'next/image';
import DownloadIcon from './DownloadIcon';





type ImageProps = {
    alt: string;
    imgSrc: StaticImageData | string | any;
    activeVerse: number

};
function Wallpaper({ imgSrc, alt, activeVerse }: ImageProps) {
    return (
        <a download='wallpaper' href={ `/wallpapers/${alt}-v${activeVerse+1}.zip` } className=' w-full  flex flex-col space-y-4 group '>
            <div className="w-full  h-[250px] hover:shadow-xl hover:scale-[1.01] transition duration-300 ">
                <BluryImage imgSrc={ imgSrc } alt={ alt } className='rounded-md ' />
            </div>
            <div className='flex items-center justify-end space-x-2'>
                <DownloadIcon />
                <span className='bg-gray-200 dark:bg-gray-500 py-1 px-2 rounded-md'>10</span>
            </div>
        </a>
    )
}

export default Wallpaper