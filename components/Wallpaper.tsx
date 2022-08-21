import React from 'react'
import BluryImage from './core/BluryImage'
import IconLink from './core/IconLink'
import v1 from '../public/wallpapers/v1.png'


function Wallpaper() {
    return (
        <div className=' flex flex-col space-y-4 group transition duration-300'>
            <div className="w-full md:max-w-[400px] h-[250px] hover:shadow-xl hover:scale-[1.01] ">
                <BluryImage imgSrc={ v1 } alt='v1-pic' className='rounded-md ' />
            </div>
            <IconLink label="Download" className='group-hover:translate-x-1 group-hover:font-semibold transition duration-200' />
        </div>
    )
}

export default Wallpaper