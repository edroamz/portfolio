import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#6369ff"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
