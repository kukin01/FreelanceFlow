"use client"
import React from "react";
import Sidebar  from "@/components/sidebar";
import Image from "next/image";
import { Bell } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-[#FAF8F5] flex-row justify-between">
      <Sidebar />
        <div className="flex flex-col w-full flex-1 px-10 py-6">
            <div className="bg-gray-300 p-3 flex items-center justify-between rounded-lg">
                <span>
                    Good morning, Joe
                </span>
                <div className="flex flex-row">
                  <Bell />
                  <Image
                    src="/woman-removebg-preview.png"
                    alt="Profile Picture"
                    width={40}
                    height={40}
                    className="ml-2 rounded-full"
                  />
                </div>
            </div>
        </div>
    </main>
  );
}