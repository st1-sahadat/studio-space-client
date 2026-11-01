import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/HomePage/Footer";
import Navbar from "@/components/HomePage/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudioSpace — Creative Studios & Workspaces",
  description: "Find and book premium creative studios, co-working spaces, and collaborative workspaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <div className="container mx-auto flex flex-1 flex-col px-4 sm:px-6 lg:px-8">
          {/* <ThemeProvider attribute="class" enableSystem defaultTheme="system"> */}
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          {/* </ThemeProvider> */}
        </div>
      </body>
    </html>
  );
}