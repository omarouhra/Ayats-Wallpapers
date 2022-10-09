import create from 'zustand'
import {combine} from 'zustand/middleware'

const useStore = create(combine(
    {
        loadingVerse: <boolean>false,
        specVerse: <{
            [id: string]: {
                source: string,
                verseAr: string,
                verseEn: string
            }
        } | null>null,
        specVerseNum: <number | null>null,
        specSuraNum: <number | null>null,
    },
    (set) => ({
        setLoadingVerse: (value: boolean) => set({loadingVerse: value}),
        setSpecVerseNum: (value: number | null) => set({specVerseNum: value}),
        setSpecSuraNum: (value: number | null) => set({specSuraNum: value}),
        setSpecVerse: (
            value: {
            [id: string]: {
                source: string,
                verseAr: string,
                verseEn: string
            }
        } | null) => set({specVerse: value}),
    })
))

export default useStore