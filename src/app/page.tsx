import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#FAF8F5] flex-col items-center justify-between">
        <nav className="flex w-full border-b-2 border-grey-100 p-6 items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-black text-lg font-bold">FreelanceFlow</h1>
            <div className="flex text-grey-300">
              <Link href="/features" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
              <Link href="/resources" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <Link href="/signup" className="text-white bg-[#B34C2D] p-4 rounded-md text-sm font-medium">Get started</Link>
            </div>
          </div>
        </nav>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
          <h1 className="text-black font-bold text-6xl">
            <span className="block">Get paid faster.</span>
            <span>Look Professional doing it.</span>
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            FreelanceFlow is the all-in-one solution for freelancers to manage their
            projects, invoices, and payments with ease.
          </p>
          <div className="flex mt-8 items-center justify-center gap-4">
            <button>
              <Link href="/signup" className="text-white bg-[#B34C2D] p-4 rounded-md text-sm font-medium">start for free</Link>
            </button>
            <button>
              <Link href="/features" className="text-gray-600 bg-white border border-black p-4 hover:text-gray-800 rounded-md text-sm font-medium">See how it works</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
