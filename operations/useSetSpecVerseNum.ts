import useStore from "../store/store"

const useSetSpecVerseNum = () => {
    const setSpecVerseNum = useStore((state) => state.setSpecVerseNum)

    return (value: number|null) => {
        setSpecVerseNum(value)
    }
}

export default useSetSpecVerseNum