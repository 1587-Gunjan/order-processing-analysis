import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { recentOrders } from "@/data/dashboardData";

const statusStyles = {
  completed: "bg-success/10 text-success border-success/20",
  processing: "bg-info/10 text-info border-info/20",
  pending: "bg-warning/10 text-accent border-accent/20",
};

const priorityStyles = {
  normal: "",
  high: "bg-warning/10 text-accent border-accent/20",
  urgent: "bg-destructive/10 text-destructive border-destructive/20",
};

const RecentOrdersTable = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.55 }}
    className="glass-card rounded-xl p-5"
  >
    <h3 className="text-sm font-semibold text-foreground mb-4">Recent Orders</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-2.5 text-left font-medium text-muted-foreground">Order ID</th>
            <th className="pb-2.5 text-left font-medium text-muted-foreground">Customer</th>
            <th className="pb-2.5 text-right font-medium text-muted-foreground">Items</th>
            <th className="pb-2.5 text-center font-medium text-muted-foreground">Status</th>
            <th className="pb-2.5 text-right font-medium text-muted-foreground">Time</th>
            <th className="pb-2.5 text-center font-medium text-muted-foreground">Priority</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.id} className="border-b border-border/50 last:border-0">
              <td className="py-2.5 font-mono font-medium text-foreground">{order.id}</td>
              <td className="py-2.5 text-foreground">{order.customer}</td>
              <td className="py-2.5 text-right font-mono text-muted-foreground">{order.items}</td>
              <td className="py-2.5 text-center">
                <Badge variant="outline" className={`text-xs capitalize ${statusStyles[order.status]}`}>
                  {order.status}
                </Badge>
              </td>
              <td className="py-2.5 text-right font-mono text-muted-foreground">{order.time}</td>
              <td className="py-2.5 text-center">
                {order.priority !== "normal" && (
                  <Badge variant="outline" className={`text-xs capitalize ${priorityStyles[order.priority]}`}>
                    {order.priority}
                  </Badge>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default RecentOrdersTable;
