'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { Toaster } from "@/components/ui/toaster"
import Providers  from './Providers'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development"
          }
        )}
      >
          <Toaster />
          {/* main page */}
          <div className="flex flex-col">
            <Providers>
              {children}
            </Providers>
          </div>
      </body>
    </html>
  );
}
