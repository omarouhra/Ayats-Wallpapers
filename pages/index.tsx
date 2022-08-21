import Head from "next/head";
import BluryImage from "../components/core/BluryImage";
import IconLink from "../components/core/IconLink";
import Text from "../components/core/Text";
import Title from "../components/core/Title";
import Wallpaper from "../components/Wallpaper";
const Home = () => {

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
      <main>
        <section className="py-12">
          <Title title="Make your wallpapers reminds you of god" />
          <Text text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using" />
          <button className="font-light border-[1.7px] rounded-sm dark:hover:text-black hover:text-white border-gray-900 dark:border-gray-200 py-2 px-5 hover:bg-gray-900 dark:hover:bg-gray-100 ">
            Choose your prefered Aya  🕌
          </button>
        </section>

        <section className="py-12">
          <Title title="Aya 1-2, Chapter Al-Talaq" />
          <div className="space-y-6 mt-8">
            <p className="font-amiri text-md md:text-xl text-gray-400 dark:text-gray-100 text-right">وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًۭا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ</p>
            <Text text="And whoever is mindful of Allah, He will make a way out for them, and provide for them from sources they could never imagine." />
          </div>
        </section>

        <section className="py-12">

          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 lg:gap-12">
            { [1, 2, 3, 4, 5, 6].map((element, index) => (
              <Wallpaper key={ index } />
            )) }


          </div>

        </section>
      </main>
    </div >
  );
};

export default Home;
