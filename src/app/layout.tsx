import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/HomePage/Footer";
import Navbar from "@/components/HomePage/Navbar";
import PageLoader from "@/components/PageLoader";
import { Bounce, ToastContainer } from "react-toastify";
import StudioProvider from "./context/studioContext";

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
        <StudioProvider>
          <Navbar />
          {/* Stream the page shell first; data-fetching pages fill in behind this boundary. */}
          <Suspense fallback={<PageLoader />}>{children}</Suspense>
          <Footer />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </StudioProvider>
      </body>
    </html>
  );
}