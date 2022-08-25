import Head from "next/head";
import { useState } from "react";
import BluryImage from "../components/core/BluryImage";
import IconLink from "../components/core/IconLink";
import Text from "../components/core/Text";
import Title from "../components/core/Title";
import VerseButton from "../components/Layout/VerseButton";
import Modal from "../components/Modal";
import Wallpaper from "../components/Wallpaper";
import { VERSES } from '../data/verses'
import { WALLPAPERS } from '../data/wallpapers'
import useSWR from "swr";


const Home = () => {
  const [showVerseModal, setShowVerseModal] = useState(false)
  const [activeVerse, setActiveVerse] = useState(0)
  const [replay, setReplay] = useState(false)


  const updateAnimation = () => {
    setReplay(true)
    setTimeout(() => {
      setReplay(false)
    }, 500);

  }

  // Async functions
  const getWallpapers = async () => {
    try {
      const response = await fetch("/api/wallpaper", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };


  // SWR
  const { data } = useSWR(`/api/wallpaper`, getWallpapers);

  return (
    <div>
      <Head>
        <title>Ayats Wallpapers 🕋</title>
        <meta
          name='description'
          content='Ayats Walpaper app designed and built By @omar.ouhra'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Modal showModal={ showVerseModal } setShowModal={ setShowVerseModal }>
        <div className='inline-block w-full my-12  space-y-6 max-w-3xl py-8 px-5  overflow-hidden text-center align-middle transition-all bg-white dark:bg-[#023E51] shadow-xl rounded-lg'>

          { VERSES.map(({ source, verseAr, verseEn }, index) => (
            <VerseButton
              key={ index }
              source={ source }
              verseAr={ verseAr }
              verseEn={ verseEn }
              index={ index }
              closeModal={ setShowVerseModal }
              activeVerse={ activeVerse }
              setVerse={ setActiveVerse }
              setReplay={ updateAnimation }
            />
          )) }

        </div>
      </Modal>
      <main>
        <section className="py-12">
          <Title title="Make your wallpapers reminds you of god" />
          <Text text="Donwload now any wallapers(Laptop, Tablet and Phone) you like for free!" />
          <button
            onClick={ () => setShowVerseModal(true) }
            className="font-light border-[1.7px] rounded-sm dark:hover:text-black hover:text-white border-gray-900 dark:border-gray-200 py-2 px-5 hover:bg-gray-900 dark:hover:bg-gray-100 ">
            Choose your prefered Aya  🕌
          </button>
        </section>

        <section className="pt-12 h-[200px] md:h-[250px] ">
          <Title title={ VERSES[activeVerse].source } />
          <div className="space-y-6 mt-8">
            <p className="font-amiri text-md md:text-xl text-black dark:text-gray-300 text-right">{ VERSES[activeVerse].verseAr }</p>
            <Text text={ VERSES[activeVerse].verseEn } />
          </div>
        </section>

        <section
          className={ `py-12  ${replay && 'animate-fade-in-up'}` }>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 lg:gap-12 justify-items-center ">
            { WALLPAPERS[activeVerse].map(({ src, alt }, index) => (
              <Wallpaper key={ index } imgSrc={ src } alt={ alt } activeVerse={ activeVerse + 1 } ayaData={ data && data } />
            )) }
          </div>
        </section>

        <hr className="border my-8" />

        <section className="py-12">
          <Title title="Contributions" />
          <Text text="For any suggestions or bugs reporting! Check the Github repository. Thanks " />
        </section>
      </main>
    </div >
  );
};

export default Home;