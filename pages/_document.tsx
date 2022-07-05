import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/images/lo_be.png" as="image" />
        <link rel="preload" href="/fonts/Poppins-Medium.ttf" as="font" type="font/ttf" crossOrigin="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
