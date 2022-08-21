import Head from "next/head";
const Home = () => {

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
        <p className="font-amiri">وَمَن يَتَّقِ ٱللَّهَ يَجْعَل لَّهُۥ مَخْرَجًۭا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ </p>
      </main>
    </div>
  );
};

export default Home;
