"use client";

import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="text-gray-400 hover:text-gray-200 transition-colors flex items-center space-x-1"
      onClick={() => {
        try {
          signOut();
        } catch (error) {
          console.log("error", error);
        }
      }}
    >
      <LogOutIcon className="w-4 h-4" />
      <span>Sign out</span>
    </button>
  );
}
