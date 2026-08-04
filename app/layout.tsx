import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Women's World | Bridal Beauty & Custom Tailoring",
  description:
    "Discover bespoke bridal couture and custom tailoring at Women's World. Where every stitch tells your story.",
  keywords: [
    "bridal tailoring",
    "custom stitching",
    "bridal wear",
    "women fashion",
    "bespoke couture",
    "wedding dress",
  ],
  authors: [{ name: "Women's World" }],
  creator: "Women's World",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Women's World | Bridal Beauty & Custom Tailoring",
    description:
      "Discover bespoke bridal couture and custom tailoring at Women's World.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#3B1240",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-background text-text font-body antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
