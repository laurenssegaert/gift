import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-green-900">
      <head>
      <meta name="fc:frame" content='{
  "version": "next",
  "imageUrl": "https://main.d337pf8gj8cpmm.amplifyapp.com/splash.png",
  "button": {
    "title": "Open Gift",
    "action": {
      "type": "launch_frame",
      "name": "Gift",
      "url": "https://main.d337pf8gj8cpmm.amplifyapp.com/",
      "splashImageUrl": "https://main.d337pf8gj8cpmm.amplifyapp.com/splash.png",
      "splashBackgroundColor": "#14532D"
    }
  }
}' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
