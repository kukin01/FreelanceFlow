import { Invoice, Client } from "@/lib/dummyData";

export function generateInvoiceCode(
    clientId: string,
    invoices: Invoice[],
    clients: Client[]
): string{

    const year = new Date().getFullYear();

    const company = clients.find(client => client.id === clientId)?.company;
    if (!company) return 'INV-${year}-001';

    const companyInvoicesThisYear = invoices.filter((inv) => {
      const invoiceClientCompany = clients.find((c) => c.id === inv.id)?.company
      return invoiceClientCompany === company && inv.invoiceCode.startsWith(`INV-${year}-`)
    })

    const highestNumber = companyInvoicesThisYear.reduce((max, inv) => {
      const match = inv.invoiceCode.match(/-(\d+)$/)
      const num = match ? parseInt(match[1], 10) : 0
      return Math.max(max, num)
    }, 0)
  const nextNumber = highestNumber + 1
  return `INV-${year}-${String(nextNumber).padStart(3, "0")}`
}