import React from 'react'

type VerseButtonType = {
    source: string,
    verseAr: string,
    verseEn: string,
    index: number,
    setVerse: any,
    closeModal: any,
    activeVerse: number
}


function VerseButton({ source, verseAr, verseEn, index, setVerse, activeVerse, closeModal }: VerseButtonType) {
    return (
        <button onClick={ () => {
            closeModal(false);
            setVerse(index);
        } } className={ `space-y-6 w-full hover:shadow-2xl transition duration-200 border-[3px] border-gray-300 py-6 px-5 rounded-md text-left ${activeVerse === index && 'bg-[#04A0D1] text-white border-[#04A0D1]'}` }>
            <h2 className={ `text-xl md:text-2xl  mb-3 font-normal ${activeVerse === index ? 'text-white' : 'text-gray-700 dark:text-gray-100'}` }>{ source }</h2>
            <p className={ `font-amiri text-md md:text-xl ${activeVerse === index ? 'text-white' : 'text-gray-400 dark:text-gray-100'} text-right` }>{ verseAr }</p>
            <p className={ `text-sm md:text-lg max-w-xl font-light ${activeVerse === index ? 'text-white' : 'text-gray-400 dark:text-gray-100'} ` }>{ verseEn }</p>
        </button>
    )
}

export default VerseButton