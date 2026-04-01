import { orderVolumeData, processingTimeData, teamPerformance, recentOrders, efficiencyByChannel } from "@/data/dashboardData";

type DatasetKey = "orders" | "processingTime" | "team" | "recentOrders" | "channels" | "all";

const toCsv = (headers: string[], rows: string[][]): string => {
  return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
};

const datasets: Record<Exclude<DatasetKey, "all">, () => string> = {
  orders: () =>
    toCsv(
      ["Month", "Orders", "Processed", "Returned"],
      orderVolumeData.map((d) => [d.month, String(d.orders), String(d.processed), String(d.returned)])
    ),
  processingTime: () =>
    toCsv(
      ["Day", "Avg Minutes", "Target"],
      processingTimeData.map((d) => [d.day, String(d.avgMinutes), String(d.target)])
    ),
  team: () =>
    toCsv(
      ["Name", "Orders Processed", "Avg Time", "Accuracy %", "Trend"],
      teamPerformance.map((d) => [d.name, String(d.ordersProcessed), d.avgTime, String(d.accuracy), d.trend])
    ),
  recentOrders: () =>
    toCsv(
      ["Order ID", "Customer", "Items", "Status", "Time", "Priority"],
      recentOrders.map((d) => [d.id, d.customer, String(d.items), d.status, d.time, d.priority])
    ),
  channels: () =>
    toCsv(
      ["Channel", "Efficiency %", "Volume"],
      efficiencyByChannel.map((d) => [d.channel, String(d.efficiency), String(d.volume)])
    ),
};

export const downloadCsv = (key: DatasetKey) => {
  let content: string;
  let filename: string;

  if (key === "all") {
    const sections = Object.entries(datasets).map(
      ([name, fn]) => `=== ${name.toUpperCase()} ===\n${fn()}`
    );
    content = sections.join("\n\n");
    filename = "order-processing-report.csv";
  } else {
    content = datasets[key]();
    filename = `${key}-data.csv`;
  }

  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
