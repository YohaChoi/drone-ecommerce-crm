/** @format */
'use client'
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";
import { Header } from "@/components/Header";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";


export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession()
  const router = useRouter()

  if(!session){
    router.replace('/login')
    return null
  }

  return (
      <main
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
        )}
      >
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex">
            {/* sidebar */}
            <SideNavbar />
            {/* main page */}
            <div className="p-8 w-full">{children}</div>
          </div>
        </div>
      </main>
  );
}
