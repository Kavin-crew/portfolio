import { Inter } from "next/font/google";
import { NavbarDemo } from "@/app/_components/Navbar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Kavin A. - Portfolio",
  description: "Portfolio of Kavin A. - a Front-end Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="overflow-y-scroll scroll-smooth"
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavbarDemo />
          <main className="w-full">
            {children}
            <Toaster position="top-right" />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
