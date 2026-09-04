import Sidebar from "@/components/sidebar";

export default function InvoiceLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return(
      <main className="flex h-screen overflow-hidden bg-[#FAF8F5]">
        <Sidebar />
        <div className="flex-1 overflow-y-auto px-10 py-6">
          {children}
        </div>
      </main>
    )
}
   