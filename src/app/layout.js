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
  metadataBase: new URL("https://parasbhegade.me"),
  title: {
    default: "Paras Bhegade | Software Engineer – AI, ML & Web Development",
    template: "%s | Paras Bhegade",
  },
  description:
    "Portfolio of Paras Bhegade – Software Engineer specializing in Artificial Intelligence, Machine Learning, Data Science, and Full-Stack Web Development. Explore projects, skills, and experience.",
  keywords: [
    "Paras Bhegade",
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Data Science",
    "Full Stack Developer",
    "Python",
    "React",
    "Next.js",
    "Portfolio",
    "Web Development",
    "TensorFlow",
    "Deep Learning",
  ],
  authors: [{ name: "Paras Bhegade", url: "https://parasbhegade.me" }],
  creator: "Paras Bhegade",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parasbhegade.me",
    siteName: "Paras Bhegade Portfolio",
    title: "Paras Bhegade | Software Engineer – AI, ML & Web Development",
    description:
      "Explore the portfolio of Paras Bhegade – projects in AI, Machine Learning, Data Science, and Full-Stack Web Development.",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 600,
        alt: "Paras Bhegade – Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paras Bhegade | Software Engineer – AI, ML & Web Development",
    description:
      "Explore the portfolio of Paras Bhegade – projects in AI, Machine Learning, Data Science, and Full-Stack Web Development.",
    images: ["/profile.png"],
  },
  alternates: {
    canonical: "https://parasbhegade.me",
  },
};

// JSON-LD structured data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Paras Bhegade",
  url: "https://parasbhegade.me",
  jobTitle: "Software Engineer",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Python",
    "JavaScript",
  ],
  sameAs: [
    "https://www.linkedin.com/in/paras-bhegade/",
    "https://github.com/ParasBhegade",
  ],
  email: "bhegadeparas5@gmail.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Nutan College of Engineering and Research, Pune",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`} style={{ position: "relative" }}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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

