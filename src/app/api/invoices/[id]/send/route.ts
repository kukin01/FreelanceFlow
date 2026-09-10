import { renderToBuffer } from "@react-pdf/renderer";
import { transporter } from "@/lib/mailer";
import { InvoicePDF } from "@/components/invoicePdf";
import { DUMMY_CLIENTS, DUMMY_INVOICES } from "@/lib/dummyData";

export const runtime="nodejs";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const invoice = DUMMY_INVOICES.find((inv) => inv.id === params.id);
  if (!invoice) {
      return new Response("Invoice not found", { status: 404 });
  }  
  const client = DUMMY_CLIENTS.find((c) => c.id === invoice.clientId);
  if (!client) {
      return new Response("Client not found", { status: 404 });
  }
}