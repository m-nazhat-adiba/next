import "@/styles/globals.css";

import { Montserrat, Poppins, Roboto_Condensed } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const roboto_c = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Default Title</title>
        {/* <title>Meta Tags — Preview, Edit and Generate</title> */}
        <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
        <meta
          name="description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="og:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-roboto_c: ${roboto_c.style.fontFamily};
            --font-montserrat: ${montserrat.style.fontFamily};
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
