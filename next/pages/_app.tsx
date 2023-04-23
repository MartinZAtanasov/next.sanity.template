import type { AppProps } from "next/app";
import { Balsamiq_Sans, Bellota_Text } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { enrichedTheme } from "../template/theme";

const balsamiq = Balsamiq_Sans({ subsets: ["latin"], weight: "400" });
const bellota = Bellota_Text({ subsets: ["latin"], weight: "700" });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <style jsx global>{`
        :root {
          --primary-font-family: ${balsamiq.style.fontFamily};
          --secondary-font-family: ${bellota.style.fontFamily};
        }
      `}</style>

      <ThemeProvider theme={enrichedTheme}>
        <CssBaseline />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}
