import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Sidebar() {

    const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Projects", href: "/projects" },
    { name: "Invoices", href: "/invoices" },
    { name: "Payments", href: "/payments" },
    { name: "Settings", href: "/settings" },
    { name: "Clients", href: "/clientsPage" }, 
    ]
  return (
    <div className="w-64 h-screen bg-gray-400 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">FreelanceFlow</h2>
        <div className="flex ">
          <Image
            src="/woman-removebg-preview.png"
            alt="FreelanceFlow Logo"
            width={100}
            height={100}
            className="mb-4 rounded-full"
          />
          <p>
              <span className="block font-bold mb-2 text-lg">Joe Doe</span>
              <span className="border border-yellow p-2 text-sm rounded-full">FREE PLAN</span>
          </p>
        </div>
        <nav className="flex flex-col gap-4 mt-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <Button className="bg-[#ab3413] text-white w-full hover:bg-[#ab3413]/90">
        <Link href="/upgrade">Create Invoice</Link>
      </Button>
    </div>
  );
}