import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PadoLabs | Fullstack Developer",
  description: "Fullstack developer crafting thoughtful web experiences, product ideas, and real-world systems.",
  metadataBase: new URL("https://padolabs.dev"),
  openGraph: {
    title: "PadoLabs | Fullstack Developer",
    description: "Fullstack developer crafting thoughtful web experiences, product ideas, and real-world systems.",
    url: "https://padolabs.dev",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "PadoLabs portfolio preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PadoLabs | Fullstack Developer",
    description: "Fullstack developer crafting thoughtful web experiences, product ideas, and real-world systems.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#ffffff', color: '#171717' }}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
