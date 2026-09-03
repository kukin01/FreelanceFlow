

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

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  testimony: string;
}

export interface Client {
  id: string;
  name: string;
  company: string;
  avatar: string;
  totalInvoices: number;
  activeInvoices: number;
  balance: number;
  currency: string;
}

export const DUMMY_CLIENTS: Client[] = [
  {
    id: "1",
    name: "Ava Thompson",
    company: "Northwind Studio",
    avatar: "AT",
    totalInvoices: 12450,
    activeInvoices: 3,
    balance: 4200,
    currency: "USD",
  },
  {
    id: "2",
    name: "Daniel Brooks",
    company: "Bright Labs",
    avatar: "DB",
    totalInvoices: 9800,
    activeInvoices: 2,
    balance: 2100,
    currency: "USD",
  },
  {
    id: "3",
    name: "Sofia Alvarez",
    company: "Harbor & Co",
    avatar: "SA",
    totalInvoices: 15600,
    activeInvoices: 4,
    balance: 5400,
    currency: "USD",
  },
  {
    id: "4",
    name: "Mina Patel",
    company: "Pine Digital",
    avatar: "MP",
    totalInvoices: 8300,
    activeInvoices: 1,
    balance: 1800,
    currency: "USD",
  },
  {
    id: "5",
    name: "Liam Carter",
    company: "Crest Ventures",
    avatar: "LC",
    totalInvoices: 11200,
    activeInvoices: 2,
    balance: 3000,
    currency: "USD",
  },
  {
    id: "6",
    name: "Nora Kim",
    company: "Evergreen Agency",
    avatar: "NK",
    totalInvoices: 13750,
    activeInvoices: 3,
    balance: 2500,
    currency: "USD",
  },
];

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

export const DUMMY_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Anderson",
    avatar: "🎨",
    testimony: "FreelanceFlow has transformed how I manage my invoices.",
  },
  {
    id: "2",
    name: "Marcus Chen",
    avatar: "💻",
    testimony: "The dashboard is intuitive and saves me hours every week.",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    avatar: "📊",
    testimony: "Professional, reliable, and exactly what my freelance business needed to scale.",
  },
];



