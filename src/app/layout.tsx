import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TRPCProvider from '@/lib/trpc/Provider';
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
  title: 'The PM American PgMP',
  description: 'PgMP Exam Simulator & Learning Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TRPCProvider>
          {/* You might have other providers here like ThemeProvider if using shadcn themes */}
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}
