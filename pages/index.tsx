import Head from "next/head";
import Text from "../components/core/Text";
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
        <Text text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using" />
      </main>
    </div >
  );
};

export default Home;
