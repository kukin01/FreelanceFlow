import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { DUMMY_CLIENTS } from "@/lib/dummyData";

export default function ClientsPage() {
  return (
    <div className="flex bg-[#FAF8F5]">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="w-full max-w-md">
            <input
              type="search"
              placeholder="Search clients"
              aria-label="Search clients"
              className="w-full rounded-full bg-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <Button>+ Add New Client</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-3">
          {DUMMY_CLIENTS.map((client) => (
            <Card
              key={client.id}
              className="rounded-2xl bg-white"
            >
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">
                  {client.avatar}
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    {client.name}
                  </CardTitle>
                  <CardDescription className="truncate text-sm text-slate-500">
                    {client.company}
                  </CardDescription>
                </div>
              </CardContent>

              <CardContent className="space-y-2 border-t border-slate-100 px-5 pb-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Total invoices</span>
                  <span className="font-medium text-slate-900">
                    {client.currency} {client.totalInvoices.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Active invoices</span>
                  <span className="font-medium text-slate-900">
                    {client.activeInvoices}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Balance due</span>
                  <span className="font-medium text-rose-600">
                    {client.currency} {client.balance.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}