import React from 'react'
import BluryImage from './core/BluryImage'
import preview1 from '../public/preview/preview-1.png'
import Link from 'next/link'


function Wallpaper() {
    return (
        <Link href='/' >
            <a className=' w-full  flex flex-col space-y-4 group '>
                <div className="w-full  h-[250px] hover:shadow-xl hover:scale-[1.01] transition duration-300 ">
                    <BluryImage imgSrc={ preview1 } alt='v1-pic' className='rounded-md ' />
                </div>
                <span className='group-hover:translate-x-1 group-hover:font-semibold transition duration-200'>
                    Download { '>' }
                </span>
            </a>
        </Link >
    )
}

export default Wallpaper