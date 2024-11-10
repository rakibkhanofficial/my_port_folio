import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter?.className}`}>
      <body>
        <NextThemesProvider defaultTheme="system" attribute="class">
          <NextUIProvider>{children}</NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
