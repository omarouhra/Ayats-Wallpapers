import React from 'react'
import Link from 'next/link'

type LinkType = {
    label: string;
    href?: string;
    className?: string;
}

function IconLink({ label, href, className }: LinkType) {
    return (
        <Link href='/' >
            < a >
                <div className={ className }>
                    <span>
                        { label } { '>' }
                    </span>
                </div>
            </ a>
        </Link >

    )
}

export default IconLink