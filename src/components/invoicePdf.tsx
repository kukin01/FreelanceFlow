import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import type { Invoice } from "@/lib/dummyData"

interface InvoiceItem {
  id: number | string
  description: string
  quantity: number
  rate: number
}

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 11, fontFamily: "Helvetica" },
  header: { fontSize: 18, marginBottom: 12, color: "#7f1d1d" },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  itemRow: { flexDirection: "row", borderBottom: "1px solid #e5e5e5", paddingVertical: 4 },
  col: { flex: 1 },
  totalRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 12, fontWeight: 700 },
})

export function InvoicePDF({
  invoice,
  items,
  total,
}: {
  invoice: Invoice
  items: InvoiceItem[]
  total: number
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Invoice {invoice.invoiceCode}</Text>
        <View style={styles.row}>
          <Text>Client: {invoice.clientName}</Text>
          <Text>Due: {invoice.dueDate}</Text>
        </View>

        {items.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.col}>{item.description}</Text>
            <Text style={styles.col}>{item.quantity}</Text>
            <Text style={styles.col}>${item.rate.toFixed(2)}</Text>
            <Text style={styles.col}>${(item.quantity * item.rate).toFixed(2)}</Text>
          </View>
        ))}

        <View style={styles.totalRow}>
          <Text>Total</Text>
          <Text>${total.toFixed(2)}</Text>
        </View>
      </Page>
    </Document>
  )
}