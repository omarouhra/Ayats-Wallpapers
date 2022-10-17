import useStore from "../store/store"

const useSetSpecSuraNum = () => {
    const setSpecSuraNum = useStore((state) => state.setSpecSuraNum)

    return (value: number|null) => {
        setSpecSuraNum(value)
    }
}

export default useSetSpecSuraNum