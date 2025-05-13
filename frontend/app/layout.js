import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tristan Winship | Full-Stack Developer Portfolio",
  description:
    "A full-stack developer portfolio showcasing projects, skills, and experience in modern web development.",
  keywords: [
    "Web Developer",
    "Full-Stack",
    "React",
    "Node.js",
    "Portfolio",
    "JavaScript",
    "Next.js",
  ],
  authors: [{ name: "Tristan Winship", url: "https://yourdomain.com" }],
  creator: "Tristan Winship",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Tristan Winship | Full-Stack Developer",
    description:
      "Explore my portfolio of full-stack web projects, development skills, and experience.",
    url: "https://yourdomain.com",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://js.hcaptcha.com/1/api.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
