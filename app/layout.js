import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {  dark, neobrutalism,shadesOfPurple  } from "@clerk/themes";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FileShare ",
  description: "Share your files instantly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        signUp: { baseTheme: neobrutalism },
        signIn: { baseTheme: [shadesOfPurple,neobrutalism] },

      }}>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Footer/>
      </body>
        </ClerkProvider>
    </html>
  );
}
