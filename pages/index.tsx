import Head from "next/head";
import MoonIcon from "../components/icons/MoonIcon";
import SunIcon from "../components/icons/SunIcon";
import { useTheme } from "next-themes";

const Home = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <div className='px-10'>
      <Head>
        <title>Ayats Wallpapers 🕋</title>
        <meta
          name='description'
          content='Ayats Walpaper app designed and built By @omar.ouhra'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>Ayats Wallpapers 🕋</h1>
      </main>
    </div>
  );
};

export default Home;
