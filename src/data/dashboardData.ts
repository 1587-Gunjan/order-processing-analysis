export const orderVolumeData = [
  { month: "Oct", orders: 1240, processed: 1180, returned: 60 },
  { month: "Nov", orders: 1580, processed: 1510, returned: 70 },
  { month: "Dec", orders: 2100, processed: 1950, returned: 150 },
  { month: "Jan", orders: 1420, processed: 1380, returned: 40 },
  { month: "Feb", orders: 1650, processed: 1600, returned: 50 },
  { month: "Mar", orders: 1890, processed: 1830, returned: 60 },
];

export const processingTimeData = [
  { day: "Mon", avgMinutes: 14.2, target: 12 },
  { day: "Tue", avgMinutes: 11.8, target: 12 },
  { day: "Wed", avgMinutes: 13.5, target: 12 },
  { day: "Thu", avgMinutes: 10.9, target: 12 },
  { day: "Fri", avgMinutes: 15.1, target: 12 },
  { day: "Sat", avgMinutes: 12.4, target: 12 },
  { day: "Sun", avgMinutes: 9.8, target: 12 },
];

export const statusBreakdown = [
  { name: "Completed", value: 68, color: "hsl(152, 60%, 42%)" },
  { name: "In Progress", value: 18, color: "hsl(210, 80%, 55%)" },
  { name: "Pending", value: 9, color: "hsl(36, 95%, 55%)" },
  { name: "Returned", value: 5, color: "hsl(0, 72%, 55%)" },
];

export const teamPerformance = [
  { name: "Sarah K.", ordersProcessed: 342, avgTime: "9.2 min", accuracy: 99.1, trend: "up" as const },
  { name: "Marcus L.", ordersProcessed: 298, avgTime: "11.4 min", accuracy: 97.8, trend: "up" as const },
  { name: "Aisha P.", ordersProcessed: 315, avgTime: "10.1 min", accuracy: 98.5, trend: "up" as const },
  { name: "James R.", ordersProcessed: 267, avgTime: "13.6 min", accuracy: 96.2, trend: "down" as const },
  { name: "Lin W.", ordersProcessed: 289, avgTime: "12.0 min", accuracy: 97.1, trend: "stable" as const },
];

export const recentOrders = [
  { id: "ORD-7821", customer: "Apex Industries", items: 12, status: "completed" as const, time: "8.4 min", priority: "normal" as const },
  { id: "ORD-7822", customer: "TechFlow Corp", items: 3, status: "processing" as const, time: "—", priority: "high" as const },
  { id: "ORD-7823", customer: "GreenLeaf Co", items: 7, status: "completed" as const, time: "11.2 min", priority: "normal" as const },
  { id: "ORD-7824", customer: "Summit LLC", items: 24, status: "pending" as const, time: "—", priority: "urgent" as const },
  { id: "ORD-7825", customer: "Harbor Foods", items: 5, status: "completed" as const, time: "6.9 min", priority: "normal" as const },
  { id: "ORD-7826", customer: "Velocity Motors", items: 15, status: "processing" as const, time: "—", priority: "high" as const },
  { id: "ORD-7827", customer: "Cascade Retail", items: 9, status: "completed" as const, time: "10.8 min", priority: "normal" as const },
];

export const efficiencyByChannel = [
  { channel: "Web", efficiency: 94, volume: 820 },
  { channel: "API", efficiency: 97, volume: 450 },
  { channel: "Phone", efficiency: 82, volume: 310 },
  { channel: "Email", efficiency: 78, volume: 190 },
  { channel: "EDI", efficiency: 96, volume: 120 },
];
