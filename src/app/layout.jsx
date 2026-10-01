import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  variable: "--font-satoshi",
});

export const metadata = {
  title: {
    default: "ByteSpace – Learn from hundreds of online courses",
    template: "%s | ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
