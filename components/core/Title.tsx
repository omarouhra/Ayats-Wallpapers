import React from 'react'

type TitleType = {
    title: string;
}

function Title({ title }: TitleType) {

    return (
        <h2 className="text-xl md:text-2xl lg:text-3xl font-normal mb-1"
        >{ title }</h2>
    )

}

export default Title