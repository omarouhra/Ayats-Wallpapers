import React from 'react'

type TitleType = {
    title: string;
}

function Title({ title }: TitleType) {

    return (
        <h2 className="text-xl md:text-2xl  mb-3 font-normal text-gray-900 dark:text-gray-100"
        >{ title }</h2>
    )

}

export default Title