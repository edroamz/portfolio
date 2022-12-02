import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Inter, JetBrains_Mono } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter'
});
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={`${jetbrainsMono.variable} font-mono`}>
        <div className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
