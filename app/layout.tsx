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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Juan Pablo Sanabria | Full Stack Developer",
    template: "%s",
  },
  description:
    "Portafolio de Juan Pablo Sanabria, desarrollador Full Stack en Medellín.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "NestJS",
    "React",
    "TypeScript",
    "Medellín",
  ],
  authors: [{ name: "Juan Pablo Sanabria Hoyos" }],
  creator: "Juan Pablo Sanabria Hoyos",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
