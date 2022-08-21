import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';
import IconLink from './IconLink';

type ImageProps = {
    alt: string;
    imgSrc: StaticImageData | string | any;
    className?: string;
    priority?: boolean;
};

function CustomImage({ alt, imgSrc, className, priority }: ImageProps) {
    const [isLoading, setLoading] = useState(true);

    return (
        <div>

            <div className='w-full h-full'>
                <Image
                    src={ imgSrc }
                    alt={ alt }
                    layout="fill"
                    objectFit="cover"
                    priority={ priority }
                    className={ `
            ${className} duration-500 ease-in-out
            ${isLoading
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                        }
            `}
                    onLoadingComplete={ () => setLoading(false) }
                />
            </div>
            <IconLink label="Download" />
        </div>

    );
}

export default CustomImage;