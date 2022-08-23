import React from 'react'
import BluryImage from './core/BluryImage'
import { StaticImageData } from 'next/image';
import DownloadIcon from './DownloadIcon';
import { useSWRConfig } from 'swr';
// import useSWR from "swr";

type ImageProps = {
    alt: string;
    imgSrc: StaticImageData | string | any;
    activeVerse: number
    ayaData?: [],

};
function Wallpaper({ imgSrc, alt, activeVerse, ayaData }: ImageProps) {
    const { mutate } = useSWRConfig();


    const ayaId = alt + '-v' + activeVerse




    const data = ayaData?.filter(data => data.id === ayaId);




    const downloadWalpaper = async () => {

        try {
            const responce = await fetch("/api/wallpaper", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: ayaId
                }),
            });
            if (responce.ok) {
                mutate("/api/wallpaper");

            }
        } catch (error) {
            console.log("there was an error submitting", error);
        }
    };



    return (
        <a download='wallpaper' href={ `/wallpapers/${alt}-v${activeVerse}.zip` } className=' w-full  flex flex-col space-y-4 group '>
            <div onClick={ () => downloadWalpaper() } className="w-full  h-[250px] hover:shadow-xl hover:scale-[1.01] transition duration-300 ">
                <BluryImage imgSrc={ imgSrc } alt={ alt } className='rounded-md ' />
            </div>
            <div className='flex items-center justify-end space-x-2'>
                <DownloadIcon />
                <span className='bg-gray-200 dark:bg-gray-500 py-1 px-2 rounded-md'>{ data && data[0]?.downloads }</span>
            </div>
        </a>
    )
}

export default Wallpaper