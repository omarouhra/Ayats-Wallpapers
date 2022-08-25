import React, { useEffect, useState } from 'react'
import BluryImage from './core/BluryImage'
import Image, { StaticImageData } from 'next/image';
import DownloadIcon from './DownloadIcon';
import { useSWRConfig } from 'swr';
import Modal from './Modal';
// import useSWR from "swr";

type ImageProps = {
    alt: string;
    imgSrc: StaticImageData | string | any;
    activeVerse: number
    ayaData?: [],

};
function Wallpaper({ imgSrc, alt, ayaData }: ImageProps) {
    const { mutate } = useSWRConfig();

    const [showPreviewModal, setShowPreviewModal] = useState(false)




    const [replay, setReplay] = useState(false)
    // @ts-ignore
    const data: any = ayaData?.filter(data => data.id === alt);

    const downloadWalpaper = async () => {
        try {
            const responce = await fetch("/api/wallpaper", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: alt,
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
        }, 3000);

    }



    return (
        <>

            <div onClick={ () => {
                setShowPreviewModal(true)

            } } className="w-full  h-[250px] hover:shadow-2xl hover:scale-[1.01] dark:shadow-cyan-500/50 rounded-md transition duration-300 ">
                <BluryImage imgSrc={ imgSrc } alt={ alt } className='rounded-md ' />
            </div>

            <Modal showModal={ showPreviewModal } setShowModal={ setShowPreviewModal }>
                <div
                    className='inline-block w-full my-12  space-y-6 max-w-[1200px] py-8 px-5  overflow-hidden text-center align-middle transition-all bg-white dark:bg-[#023E51] shadow-xl rounded-lg'>

                    <div className=' group  w-full  flex flex-col space-y-4 group transition duration-500 '>
                        <Image src={ imgSrc } alt={ alt } className='rounded-md' />

                        <div className='flex items-center justify-between space-x-2'>

                            <a onClick={ () => {
                                downloadWalpaper()
                                updateAnimation()
                                setTimeout(() => {
                                    setShowPreviewModal(false)
                                }, 3000);

                            } } download='wallpaper' href={ `/wallpapers/${alt}.zip` } className=' outline-none bg-gray-300 dark:text-black p-2 rounded-md text-xs font-semibold group-hover:text-[#04ade0]  tranistion duration-300'>
                                <div className='flex items-center space-x-4'>
                                    <span>
                                        Click to Downloads
                                    </span>
                                    <DownloadIcon />
                                </div>
                            </a>

                            <div className='flex space-x-4 items-center'>
                                <span className={ ` dark:text-white  text-xs font-semibold p-2 rounded-md  transition duration-400 ${replay && 'scale-[1.2]'} ` } > { data && data[0]?.downloads } downloads </span>
                            </div>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Wallpaper