import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Paras Bhegade's Portfolio",
  description: "Portfolio of Paras Bhegade, a Software Engineer specializing in Artificial Intelligence, Machine Learning, and Web Development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`} style={{ position: "relative" }}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen relative" style={{ zIndex: 1 }}>
            <Navbar />
            <main className="flex-grow" style={{ paddingTop: "85px" }}>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
