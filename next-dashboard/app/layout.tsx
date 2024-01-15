import AuthStatus from "@/components/AuthStatus";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Protect",
  description:
    "A solid template to build Next.js apps with email & password auth, a PostgreSQL database, and protected content, using Next-Auth and Prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Suspense>
          <AuthStatus />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
