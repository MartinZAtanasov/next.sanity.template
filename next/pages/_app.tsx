import type { AppProps } from "next/app";
import { Bellota_Text, Rubik } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { enrichedTheme } from "../template/theme";

const primaryFont = Rubik({ subsets: ["latin"], weight: "400" });
const secondaryFont = Bellota_Text({ subsets: ["latin"], weight: "700" });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <style jsx global>{`
        :root {
          --primary-font-family: ${primaryFont.style.fontFamily};
          --secondary-font-family: ${secondaryFont.style.fontFamily};
        }
      `}</style>

      <ThemeProvider theme={enrichedTheme}>
        <CssBaseline />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}
