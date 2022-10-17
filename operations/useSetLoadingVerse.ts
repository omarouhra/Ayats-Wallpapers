import useStore from "../store/store"

const useSetLoadingVerse = () => {
    const setLoadingVerse = useStore((state) => state.setLoadingVerse)

    return (value: boolean) => {
        setLoadingVerse(value)
    }
}

export default useSetLoadingVerse