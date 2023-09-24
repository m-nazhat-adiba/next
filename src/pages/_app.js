import "@/styles/globals.css";

import { Montserrat, Poppins, Roboto_Condensed } from "next/font/google";

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
