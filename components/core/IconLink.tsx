import React from 'react'
import Link from 'next/link'

type LinkType = {
    label: string;
    href?: string;
}

function IconLink({ label, href }: LinkType) {
    return (
        <Link href='/' >
            < a >
                <div className='hover:underline'>
                    <span>
                        { label } `{ '>' }`
                    </span>
                </div>
            </ a>
        </Link >

    )
}

export default IconLink