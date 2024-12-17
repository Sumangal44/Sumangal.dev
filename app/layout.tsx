import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'fox_editions_fe - Graphic Designer Portfolio',
  description: 'Professional graphic designer specializing in branding, logo design, and visual communication. View my portfolio and services.',
  keywords: 'graphic design, branding, logo design, visual communication, portfolio',
  authors: [{ name: 'Sumangal Karan', url: 'https://devsumangal.netlify.app/' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yourwebsite.com',
    siteName: 'Designer Name Portfolio',
    images: [
      {
        url: 'https://www.yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'fox_edition_fe - Graphic Designer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                  <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}
