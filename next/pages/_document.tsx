import { Html, Head, Main, NextScript } from "next/document";

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo-main.png" />
        <link rel="canonical" href={NEXT_PUBLIC_BASE_URL} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
