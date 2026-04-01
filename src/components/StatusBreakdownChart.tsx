import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { statusBreakdown } from "@/data/dashboardData";

const StatusBreakdownChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.4 }}
    className="glass-card rounded-xl p-5"
  >
    <h3 className="text-sm font-semibold text-foreground mb-4">Order Status Breakdown</h3>
    <div className="flex items-center gap-6">
      <ResponsiveContainer width={160} height={160}>
        <PieChart>
          <Pie data={statusBreakdown} cx="50%" cy="50%" innerRadius={45} outerRadius={72} paddingAngle={3} dataKey="value" stroke="none">
            {statusBreakdown.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: "8px", fontSize: 13, border: "1px solid hsl(220,15%,90%)" }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-2.5 flex-1">
        {statusBreakdown.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-semibold font-mono text-foreground">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default StatusBreakdownChart;
