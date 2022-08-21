import React from 'react'

type TextType = {
    text: string;
}

function Text({ text }: TextType) {
    return (
        <p className='text-base font-light text-gray-400 dark:text-gray-300  mb-4 max-w-2xl'>{ text }</p>
    )
}

export default Text