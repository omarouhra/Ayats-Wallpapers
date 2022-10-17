import useStore from "../store/store"

const useSetSpecVerse = () => {
    const setSpecVerse = useStore((state) => state.setSpecVerse)

    return (value: {
        [id: string]: {
            source: string,
            verseAr: string,
            verseEn: string
        }
    } | null) => {
        setSpecVerse(value)
    }
}

export default useSetSpecVerse