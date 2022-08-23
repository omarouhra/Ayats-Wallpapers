import React, { useEffect, useState } from 'react'
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



    const [replay, setReplay] = useState(false)
    const ayaId = alt + '-v' + activeVerse
    // @ts-ignore
    const data: any = ayaData?.filter(data => data.id === ayaId);

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

    const updateAnimation = () => {
        setReplay(true)
        setTimeout(() => {
            setReplay(false)
        }, 2000);

    }



    return (
        <a download='wallpaper' href={ `/wallpapers/${alt}-v${activeVerse}.zip` } className=' group  w-full  flex flex-col space-y-4 group '>
            <div onClick={ () => {
                downloadWalpaper()
                updateAnimation()

            } } className="w-full  h-[250px] hover:shadow-xl hover:scale-[1.01] transition duration-300 ">
                <BluryImage imgSrc={ imgSrc } alt={ alt } className='rounded-md ' />
            </div>
            <div className='flex items-center justify-end space-x-2'>

                <DownloadIcon />

                <span className={ `bg-gray-300 dark:text-black p-2 rounded-md text-xs font-semibold   transition duration-400 ${replay && 'bg-[#04ade0] text-white scale-[1.3] translate-y-3 '} ` } > { data && data[0]?.downloads } </span>

            </div>
        </a >
    )
}

export default Wallpaper