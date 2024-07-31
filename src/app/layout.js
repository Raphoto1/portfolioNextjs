//imports de app
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorModeScript } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });
import {Analytics} from '@vercel/analytics/react'
//imports propios
import { Providers } from "./providers";
import theme from "../styles/theme";
export const metadata = {
  title: "Rafael Martinez Portfolio",
  description: "Personal Portfolio as multipotencial creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon2.ico' type='image/<generated>' sizes='<generated>' />
      <body className={inter.className}>
        <Analytics/>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
