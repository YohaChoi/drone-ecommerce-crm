"use client";

import { SignInButton, UserButton, useSession } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { BellIcon, MessageCircleHeart } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";


export function Header() {


  return (
    <div className="border-b dark:bg-gray-900">
      <div className="h-16 flex justify-between items-center px-[2%]">
        <Link
          href="/"
          className="flex gap-2 relative flex-shrink-0"
        >
          <Image
            className="rounded"
            src="https://www.creativefabrica.com/wp-content/uploads/2023/05/07/Drone-Logo-Graphics-69038358-1-580x387.jpg"
            alt="logo"
            width="40"
            height="40"
          />
        </Link>


        <div className="flex gap-4 items-center">
                  <UserButton showName={true} />
        </div>
      </div>
    </div>
  );
}
