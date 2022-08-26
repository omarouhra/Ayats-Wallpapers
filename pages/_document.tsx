import { Head, Html, Main, NextScript } from 'next/document';



const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta property="og:title" content="Ayats Wallpapers 🕋" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ayats-wallpapers.vercel.app/" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="og:image" content="https://ayats-wallpapers.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fp1.a8b413dd.png&w=3840&q=75" />
                <meta property='og:image:width' content='1920' />
                <meta property='og:image:height' content='1080' />
            </Head>
            <body className="font-poppins">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;