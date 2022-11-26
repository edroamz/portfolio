import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Inter, JetBrains_Mono } from '@next/font/google';

const inter = Inter();
const jetbrains = JetBrains_Mono();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={jetbrains.className}>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
