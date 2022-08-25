import React from 'react'
import Link from 'next/link'

type LinkType = {
    label: string;
    href: string;
    className?: string;
}

function IconLink({ label, href, className }: LinkType) {
    return (
        <Link href={href} >
            < a target='_blank' >
                <div className='text-gray-400 font-light hover:text-black dark:text-gray-200 dark:hover:text-white'>
                    <span>
                        { label }
                    </span>
                </div>
            </ a>
        </Link >

    )
}

export default IconLink