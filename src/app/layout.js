//imports de app
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorModeScript } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });
//imports propios
import { Providers } from "./providers";
import theme from "../styles/theme";
export const metadata = {
  title: "Rafael Martinez Portfolio",
  description: "Personal Portfoliio as multipotencial creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode } />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
