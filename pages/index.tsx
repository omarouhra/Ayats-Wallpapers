import Head from "next/head";
import {createRef, useEffect, useState} from "react";
import Text from "../components/core/Text";
import Title from "../components/core/Title";
import VerseButton from "../components/Layout/VerseButton";
import Modal from "../components/Modal";
import Wallpaper from "../components/Wallpaper";
import VERSES from '../data/verses'
import WALLPAPERS from '../data/wallpapers'
import useSWR from "swr";
import {LinkedinShare, TwitterShare} from "../components/Share";
import axios from "axios";
//Zustand implementation
import useStore from "../store/store";
import useSetLoadingVerse from "../operations/useSetLoadingVerse";
import useSetSpecVerseNum from "../operations/useSetSpecVerseNum";
import useSetSpecSuraNum from "../operations/useSetSpecSuraNum";
import useSetSpecVerse from "../operations/useSetSpecVerse";

import {exportComponentAsPNG} from "react-component-export-image";

const Home = () => {
    //TODO reduce this file's size < 100 lines
    const [showVerseModal, setShowVerseModal] = useState(false)
    const [showSpecVerseModal, setShowSpecVerseModal] = useState(false)
    const [activeVerseId, setActiveVerseId] = useState("999:1-2")//or any Aya, basically
    const [replay, setReplay] = useState(false)
    const updateAnimation = () => {
        setReplay(true)
        setTimeout(() => {
            setReplay(false)
        }, 500);

    }

    //Zustand implementation (https://github.com/pmndrs/zustand)
    const loadingVerse = useStore((state) => state.loadingVerse)
    const specVerseNum = useStore((state) => state.specVerseNum)
    const specSuraNum = useStore((state) => state.specSuraNum)
    const specVerse = useStore((state) => state.specVerse)
    const setLoadingVerse = useSetLoadingVerse()
    const setSpecVerseNum = useSetSpecVerseNum()
    const setSpecSuraNum = useSetSpecSuraNum()
    const setSpecVerse = useSetSpecVerse()
    let ref = createRef<null>()

    // Async functions
    const getWallpapers = async () => {
        try {
            const response = await fetch("/api/wallpaper", {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            });
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.log("there was an error submitting", error);
        }
    };
    const getEnVerse = async (suraNum: number, verseNum: number, newVerse: { [p: string]: { verseAr: any; source: string; verseEn: string } }) => {
        setLoadingVerse(true);
        try {
            const engVerseUrl = "https://quranenc.com/api/v1/translation/aya/english_saheeh/" + suraNum + "/" + verseNum;
            const response = await axios.get(engVerseUrl);
            //console.log(response);
            const ok = (response.status > 199 && response.status < 300)//2xx
            const notFound = (response.status > 399 && response.status < 500)//4xx
            if (ok) {
                console.log(response.data?.result.translation)
                const tafsirNumbersRegEx = new RegExp("(\\[[^a-z,A-Z]\])", "g")
                const ayatNumbersRegEx = /\(\d+\)/g
                const dashesRegEx = /-/g
                const formattedVerseEn = response.data?.result.translation.replace(tafsirNumbersRegEx, "").replace(ayatNumbersRegEx, "").replace(dashesRegEx, "").trim()
                console.log(formattedVerseEn)
                const newUpdatedVerse = {
                    [Object.keys(newVerse)[0]]: {
                        source: Object.values(newVerse)[0]["source"],
                        verseAr: Object.values(newVerse)[0]["verseAr"],
                        verseEn: formattedVerseEn,
                    }
                }
                return newUpdatedVerse
            } else if (notFound) {
                setSpecVerse(null);
            }
        } catch (error) {
            setSpecVerse(null);
            // TODO Distinguish network error from others
            console.error(error);
        } finally {
            setLoadingVerse(false);
        }
    }
    const getVerse = async (suraNum: number, verseNum: number) => {
        setLoadingVerse(true);
        try {
            const verseUrl = "https://api.alquran.cloud/v1/ayah/" + suraNum + ":" + verseNum;
            const response = await axios.get(verseUrl);
            //console.log(response);
            const ok = (response.status > 199 && response.status < 300)//2xx
            const notFound = (response.status > 399 && response.status < 500)//4xx
            if (ok) {
                const index: string = suraNum + ":" + verseNum
                const suraName = response.data.data.surah.englishName
                const newVerse = {
                    [index]: {
                        source: "Aya " + verseNum + ", Chapter " + suraName,
                        verseAr: response.data.data.text,
                        verseEn: "",
                    }
                }
                setSpecVerse(newVerse);
                return newVerse
            } else if (notFound) {
                setSpecVerse(null);
            }
        } catch (error) {
            setSpecVerse(null);
            // TODO Distinguish network error from others
            console.error(error);
        } finally {
            setLoadingVerse(false);
        }
    }

    // SWR
    const {data} = useSWR(`/api/wallpaper`, getWallpapers);

    useEffect(() => {
        if (specSuraNum && specVerseNum) {
            getVerse(specSuraNum, specVerseNum)
                .then(
                    (newVerse) => {
                        newVerse && getEnVerse(specSuraNum, specVerseNum, newVerse)
                            .then((r) => r && setSpecVerse(r)
                            )
                    }
                )
        }
    }, [specSuraNum, specVerseNum])

    return (
        <div className="font-poppins">
            <Head>
                <title>Ayats Wallpapers 🕋</title>
                <meta
                    name='description'
                    content='Ayats Walpaper app designed and built By @omar.ouhra'
                />
            </Head>
            <Modal showModal={showVerseModal} setShowModal={setShowVerseModal}>
                <div
                    className='inline-block w-full my-12  space-y-6 max-w-3xl p-2 md:py-8 md:px-5  overflow-hidden text-center align-middle transition-all bg-white dark:bg-[#023E51] shadow-xl rounded-lg'>

                    {Object.entries(VERSES.getAllVerses()).map(([id, {source, verseAr, verseEn}], index) => (
                        <VerseButton
                            key={index}
                            source={source}
                            verseAr={verseAr}
                            verseEn={verseEn}
                            index={id}
                            closeModal={setShowVerseModal}
                            activeVerse={activeVerseId}
                            setVerse={setActiveVerseId}
                            setReplay={updateAnimation}
                        />
                    ))}

                </div>
            </Modal>

            <Modal showModal={showSpecVerseModal} setShowModal={setShowSpecVerseModal}>
                <div
                    className='inline-block w-full my-12  space-y-6 max-w-3xl p-2 md:py-8 md:px-5 overflow-hidden text-center align-middle transition-all bg-white dark:bg-[#023E51] shadow-xl rounded-lg'>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 jutify-items-center py-4">
                        <label className="flex justify-center gap-5 w-full">
                            <span className="w-1/3">Sura n°</span>
                            <select className="w-1/3 text-center"
                                    defaultValue={specSuraNum ? specSuraNum.toString() : 'default'}
                                    onChange={(e) => {
                                        const val = (e.target.value !== "default") ? e.target.value : null;
                                        setSpecSuraNum(Number(e.target.value))
                                    }}
                            >
                                <option value={'1'}>1</option>
                                <option value={'2'}>2</option>
                                <option value={'default'} disabled>...</option>
                                <option value={'113'}>113</option>
                                <option value={'114'}>114</option>
                            </select>
                        </label>
                        <label className="flex justify-center gap-5 w-full">
                            <span className="w-1/3">Aya n°</span>
                            <select disabled={!specSuraNum} className="w-1/3 text-center"
                                    defaultValue={specVerseNum ? specVerseNum.toString() : 'default'}
                                    onChange={(e) => {
                                        const val = (e.target.value !== "default") ? e.target.value : null;
                                        setSpecVerseNum(Number(val))
                                    }}
                            >
                                <option value={'1'}>1</option>
                                <option value={'2'}>2</option>
                                <option value={'default'} disabled>...</option>
                                {/*TODO: update depending on Sura using this API https://api.alquran.cloud/v1/meta*/}
                                <option value={'99'}>Max-1</option>
                                <option value={'100'}>Max</option>
                            </select>
                        </label>
                    </form>
                    {!specVerseNum ? (<div></div>) :
                        loadingVerse ?
                            (<div>{"loading ..."}{/*TODO add a spinner while loading*/}</div>) :
                            !specVerse ? (
                                    <div>{"Please specify a valid surah reference (e.g Sura :2 Aya :255)."}</div>) :
                                (<>
                                    <div ref={ref}>
                                        <div
                                            className={'font-amiri  text-md md:text-xl text-black dark:text-gray-300 text-center'}
                                            hidden={!specVerseNum}>
                                            {specVerse[specSuraNum + ":" + specVerseNum]?.verseAr}
                                        </div>
                                        <div
                                            className={'font-amiri  text-md md:text-xl text-black dark:text-gray-300 text-center'}
                                            hidden={!specVerseNum}>
                                            {/*TODO add a spinner while loading*/}
                                            {specVerse[specSuraNum + ":" + specVerseNum]?.verseEn}
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            className={"bg-blend-soft-light bg-pink-400 p-4 rounded-md hover:bg-pink-800 text-gray-800 hover:text-gray-200"}
                                            onClick={() => {
                                                ref &&
                                                exportComponentAsPNG(ref, {
                                                    fileName: "Ayat Wallpaper " + specSuraNum?.toString() + " " + specVerseNum?.toString(),
                                                    html2CanvasOptions: {backgroundColor: "red"}
                                                }).catch(
                                                    (err) => console.log(err)
                                                )
                                                return
                                            }}>
                                            Generate Backgrounds
                                        </button>
                                    </div>
                                </>)
                    }
                </div>
            </Modal>
            <main>
                <section className="py-12">
                    <Title title="Make your wallpapers reminds you of god"/>
                    <Text text="Download now any wallpaper(Laptop, Tablet and Phone) you like for free!"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 jutify-items-center">
                        <button
                            onClick={() => setShowVerseModal(true)}
                            className="font-light border-[1.7px] rounded-sm dark:hover:text-black hover:text-white border-gray-900 dark:border-gray-200 py-2 px-5 hover:bg-gray-900 dark:hover:bg-gray-100 ">
                            Choose your prefered Aya 🕌
                        </button>
                        <button
                            onClick={() => setShowSpecVerseModal(true)}
                            className="font-light border-[1.7px] rounded-sm dark:hover:text-black hover:text-white border-gray-900 dark:border-gray-200 py-2 px-5 hover:bg-gray-900 dark:hover:bg-gray-100 ">
                            Choose a specific Aya 🕌
                        </button>
                    </div>
                </section>

                <section className="py-12 ">
                    <Title title={VERSES.getVerseById(activeVerseId)?.source}/>
                    <div className="space-y-6 mt-8">
                        <p className="font-amiri text-md md:text-xl text-black dark:text-gray-300 text-right">{VERSES.getVerseById(activeVerseId)?.verseAr}</p>
                        <Text text={VERSES.getVerseById(activeVerseId)?.verseEn}/>
                    </div>
                </section>

                <section
                    className={`py-12  ${replay && 'animate-fade-in-up'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-8 lg:gap-12 justify-items-center ">
                        {Object.entries(WALLPAPERS[activeVerseId]).map(([key, {src, alt}], index) => {
                            //console.log((WALLPAPERS).activeVerseId)
                            return (<Wallpaper key={index} imgSrc={src} alt={alt}
                                               ayaData={data && data}/>)
                        })}
                    </div>
                </section>

                <hr className="border my-8"/>

                <section className="py-12">
                    <Title title="Share the app"/>
                    <p className="text-gray-500 font-light dark:text-gray-200 mb-6">Let your friends know about Ayats
                        Wallpaper App! </p>
                    <div className="flex items-center  space-x-4">
                        <TwitterShare/>
                        <LinkedinShare/>
                    </div>
                </section>

                <section className="py-12">
                    <Title title="Contributions"/>
                    <p className="text-gray-500 font-light dark:text-gray-200">For any suggestions or bugs reporting!
                        Check the <a target='_blank' rel="noreferrer"
                                     href="https://github.com/omarouhra/Ayats-Wallpapers"
                                     className="font-semibold hover:underline hover:text-blue-500">Github repository</a>.
                        Thanks </p>
                </section>
            </main>
        </div>
    );
};

export default Home;