import Head from "next/head";
import Title from "../components/core/Title";
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
        <Title title="Make your wallpapers reminds you of god" />

      </main>
    </div >
  );
};

export default Home;
