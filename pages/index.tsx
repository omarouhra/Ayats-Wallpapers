import Head from "next/head";
import MoonIcon from "../components/Icons/MoonIcon";
import SunIcon from "../components/Icons/SunIcon";
import { useTheme } from "next-themes";

const Home = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <div className='px-10'>
      <Head>
        <title>Next Themes Tutorial 🚀</title>
        <meta
          name='description'
          content='Next Themes Tutorial By @omar.ouhra'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex items-center justify-end py-12'>
        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          type='button'
          className='rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700'>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </header>

      <main className='flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>Welcome Next Themes Tutorial 🚀</h1>
      </main>
    </div>
  );
};

export default Home;
