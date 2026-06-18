

export type InvoiceStatus = "paid" | "pending" | "overdue" | "draft";

export interface Invoice {
  id: string;
  invoiceCode: string;
  clientName: string;
  clientAvatar?: string;
  services: string[];
  amount: number;
  currency: string;
  status: InvoiceStatus;
  dueDate: string; 
  createdAt: string;
}


export const DUMMY_INVOICES: Invoice[] = [
  {
    id: "1",
    invoiceCode: "INV-2025-001",
    clientName: "Acme Corp",
    services: ["UI Design", "Prototyping"],
    amount: 4200,
    currency: "USD",
    status: "paid",
    dueDate: "2025-05-15",
    createdAt: "2025-04-30",
  },
  {
    id: "2",
    invoiceCode: "INV-2025-002",
    clientName: "ByteWave Studio",
    services: ["Full-Stack Development"],
    amount: 8750,
    currency: "USD",
    status: "pending",
    dueDate: "2025-06-20",
    createdAt: "2025-05-25",
  },
  {
    id: "3",
    invoiceCode: "INV-2025-003",
    clientName: "Orion Digital",
    services: ["Brand Identity", "Logo Design", "Style Guide"],
    amount: 3100,
    currency: "USD",
    status: "overdue",
    dueDate: "2025-05-01",
    createdAt: "2025-04-01",
  },
  {
    id: "4",
    invoiceCode: "INV-2025-004",
    clientName: "Nova Health",
    services: ["Mobile App Design"],
    amount: 6500,
    currency: "USD",
    status: "draft",
    dueDate: "2025-07-10",
    createdAt: "2025-06-01",
  },
  {
    id: "5",
    invoiceCode: "INV-2025-005",
    clientName: "Luma Analytics",
    services: ["Dashboard Development", "API Integration"],
    amount: 9900,
    currency: "USD",
    status: "paid",
    dueDate: "2025-05-28",
    createdAt: "2025-05-01",
  },
  {
    id: "6",
    invoiceCode: "INV-2025-006",
    clientName: "Crest Media",
    services: ["SEO Consulting", "Content Strategy"],
    amount: 2200,
    currency: "USD",
    status: "pending",
    dueDate: "2025-06-30",
    createdAt: "2025-06-05",
  },
  {
    id: "7",
    invoiceCode: "INV-2025-007",
    clientName: "Pinnacle Labs",
    services: ["Backend Architecture"],
    amount: 12000,
    currency: "USD",
    status: "overdue",
    dueDate: "2025-04-20",
    createdAt: "2025-03-20",
  },
];
