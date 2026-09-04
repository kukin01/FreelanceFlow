"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function NewInvoicePage() {
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-[#FAF8F5]">  
          <h1 className="text-lg font-bold mb-4">New Invoice</h1> 
          <div className="flex flex-col justify-center w-1/2 p-6 bg-white rounded-lg border">
            <span>Bill to:</span>

          </div>  
        </div>
    )
}