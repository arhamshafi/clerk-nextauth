"use client"

import { SignOutButton, SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center text-white">
      HOME PAGE
       <SignOutButton>
        <span className="cursor-pointer py-2 px-6 bg-red-500 rounded-lg font-bold hover:bg-red-600 transition-all">
          Logout
        </span>
      </SignOutButton>
    </div>
  );
}
