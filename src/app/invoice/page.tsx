"use client"
import React from "react";
import Sidebar  from "@/components/sidebar";
import Image from "next/image";
import { Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTable, type ColumnDef, type RowData  } from "@tanstack/react-table";
import { features, type DataTableFeatures } from "@/components/InvoiceTable"
import { DataTable } from "@/components/InvoiceTable";
import { columns } from "@/components/InvoiceTable";
import { DUMMY_INVOICES }from "@/lib/dummyData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  const data = React.useMemo(() => DUMMY_INVOICES, []);
  return (
    <main className="flex h-screen bg-[#FAF8F5]">
      {/* <Sidebar /> */}
      <div className="flex-1 p-6">
        <div className="bg-gray-300 p-3 flex items-center justify-between rounded-lg">
          <span>
            Good morning, Joe
          </span>
          <div className="flex flex-row space-x-4 items-center">
            <Button variant="default" className="bg-red-900 text-white cursor-pointer">
                <Link href="/invoice/new">Create Invoice</Link>
            </Button>
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
        <div className="flex flex-row gap-6 mt-6">
          <Card className="flex-1 p-4 border-l-3 border-green-600">
            <h2 className="text-lg font-semibold mb-2">Earned this month</h2>
            <p className="text-2xl font-bold">$5,000</p>
          </Card>
          <Card className="flex-1 p-4 border-l-3 border-yellow-600">
            <h2 className="text-lg font-semibold mb-2">awaiting payment</h2>
            <p className="text-2xl font-bold">3</p>
          </Card>
          <Card className="flex-1 p-4 border-l-3 border-red-700">
            <h2 className="text-lg font-semibold mb-2">Overdue</h2>
            <p className="text-2xl font-bold">$5,000</p>
          </Card>
          <Card className="flex-1 p-4 border-l-3 border-blue-900">
            <h2 className="text-lg font-semibold mb-2">Invoices sent</h2>
            <p className="text-2xl font-bold">5</p>
          </Card>
        </div>
        <div className="mt-6 pb-6">
          <h2 className="text-md font-semibold mb-2">Recent Invoices</h2>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </main>
  );
}