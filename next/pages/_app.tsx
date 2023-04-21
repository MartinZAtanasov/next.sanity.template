import "@template/styles/theme.css";
import "@template/styles/globals.css";
import "@template/styles/sharedClasses.css";

import type { AppProps } from "next/app";
import { Balsamiq_Sans, Bellota_Text } from "next/font/google";
import { ThemeProvider } from "@mui/material";

const balsamiq = Balsamiq_Sans({ subsets: ["latin"], weight: "400" });
const bellota = Bellota_Text({ subsets: ["latin"], weight: "700" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --primary-font-family: ${balsamiq.style.fontFamily};
          --secondary-font-family: ${bellota.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}
