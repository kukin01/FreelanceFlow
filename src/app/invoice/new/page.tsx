"use client"

import React, { useState, useRef, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { DUMMY_CLIENTS,DUMMY_INVOICES } from "@/lib/dummyData"
import { generateInvoiceCode } from "@/lib/invoiceCode"
import { DatePickerInput } from "@/components/datePickerInput"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface InvoiceItem {
  id: number
  description: string
  quantity: number
  rate: number
}

export default function NewInvoicePage() {
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); 
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [issueDate, setIssueDate] = useState<Date | null>(null);
  const [taxRate, setTaxRate] = useState<number>(0);
  const [actionMessage, setActionMessage] = useState("");

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, description: "", quantity: 1, rate: 0 },
  ])

  const nextInvoiceCode = useMemo(()=>{
    if(!selectedClientId) return "INV-2024-001";
    return generateInvoiceCode(selectedClientId, DUMMY_INVOICES, DUMMY_CLIENTS)
  }, [selectedClientId])

  useEffect(() =>{
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[])

  const selected = DUMMY_CLIENTS.find(client => client.id === selectedClientId);
  const invoiceTotal = items.reduce(
    (total, item) => total + item.quantity * item.rate,
    0
  )

  function updateItem(id: number, changes: Partial<InvoiceItem>) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, ...changes } : item
      )
    )
  }
  const taxAmount = invoiceTotal * (taxRate / 100); 

  function addItem() {
    setItems((currentItems) => [
      ...currentItems,
      {
        id: Date.now(),
        description: "",
        quantity: 1,
        rate: 0,
      },
    ])
  }

  function saveDraft() {
    setActionMessage("Draft saved")
  }

  function previewPdf() {
    window.print()
  }

  function sendInvoice() {
    setActionMessage("Invoice is ready to send")
  }

  return (
    <div className="flex flex-col items-center h-screen bg-[#FAF8F5]">
      <h1 className="text-lg font-bold mb-4">New Invoice</h1>
      <div className="flex flex-col justify-center w-3/4 p-6 bg-white rounded-lg border">
        <span>Bill to:</span>
        <div className="mt-4 relative" ref={dropdownRef}>
          <Button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full text-left text-lg bg-white text-red-900 border border-gray-300 focus:outline-none"
          >
            {selected ? `${selected.name} — ${selected.company}` : "+ Add new client"}
          </Button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg">
              {DUMMY_CLIENTS.map((client) => (
                <div
                  key={client.id}
                  onClick={() => {
                    setSelectedClientId(client.id)
                    setIsOpen(false)
                  }}
                  className="flex flex-col px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <span className="font-medium">{client.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {client.email}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 w-3/4 p-6 gap-4 bg-white rounded-lg border">
        {nextInvoiceCode && (
          <div className="flex flex-col">
            <span>Invoice#</span>
            <span className="border p-1 rounded-md bg-gray-100">{nextInvoiceCode}</span>
          </div>
        )}
        <div className="flex flex-col">
          <span>Issue Date</span>
          <DatePickerInput value={issueDate} onChange={setIssueDate}/>
        </div>
        <div className="flex flex-col">
          <span>Due Date</span>
          <DatePickerInput value={dueDate} onChange={setDueDate}/>
        </div>
      </div>
      <div className="mt-6 w-3/4 rounded-lg border bg-white p-6">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="grid grid-cols-12 gap-4">
              <div className="col-span-6 flex flex-col">
                {index === 0 && <span className="text-md">Description</span>}
                <Input
                  placeholder="Enter description"
                  value={item.description}
                  onChange={(event) =>
                    updateItem(item.id, { description: event.target.value })
                  }
                  className="w-full"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                {index === 0 && <span className="text-md">QTY</span>}
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) =>
                    updateItem(item.id, { quantity: Number(event.target.value) })
                  }
                  className="w-full"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                {index === 0 && <span className="text-md">Rate</span>}
                <Input
                  type="number"
                  min="0"
                  value={item.rate}
                  onChange={(event) =>
                    updateItem(item.id, { rate: Number(event.target.value) })
                  }
                  className="w-full"
                />
              </div>
              <div className="col-span-2 flex flex-col">
                {index === 0 && <span className="text-md">Amount</span>}
                <span className="pt-2 text-sm">
                  ${(item.quantity * item.rate).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between pt-4 ">
          <Button type="button" variant="outline" onClick={addItem} className="w-full border-dashed border-red-900 text-red-900">
            + Add another item
          </Button>
        </div>
      </div>
      <section className="mt-6 grid w-3/4 grid-cols-2 gap-4 rounded-lg border p-6">
        <div className="space-y-4">
          <label className="block">
            <span className="text-md">Notes to client</span>
            <Textarea placeholder="Enter notes to client" className="bg-white" />
          </label>
          <label className="block">
            <span className="text-md">Payment instructions</span>
            <Textarea placeholder="Enter payment instructions" className="bg-white" />
          </label>
        </div>

        <aside className="rounded-lg bg-gray-100 p-4">
          <dl className="space-y-4">
            <div className="flex justify-between">
              <dt className="text-md">Subtotal</dt>
              <dd className="text-md">${invoiceTotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <dt className="text-md">Tax</dt>
              <dd>
                <Input 
                  type="number" 
                  placeholder="0.00%" 
                  className="w-24 bg-white text-right" 
                  value={taxRate}
                  onChange={(e) => setTaxRate(Number(e.target.value))}
                />
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-md">Total</dt>
              <dd className="text-md font-bold">${(invoiceTotal + taxAmount).toFixed(2)}</dd>
            </div>
          </dl>
        </aside>
      </section>
      <div className="mt-6 flex w-3/4 items-center pb-8">
        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={saveDraft} className="w-full border-dashed border-red-900 text-red-900">
            Save draft
          </Button>
          <Button type="button" variant="secondary" onClick={previewPdf} className="w-full border-dashed border-red-900 text-red-900">
            Preview PDF
          </Button>
          <Button type="button" onClick={sendInvoice} >
            Send invoice
          </Button>
        </div>
      </div>
    </div>
  )
}