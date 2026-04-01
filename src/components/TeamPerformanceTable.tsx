import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { teamPerformance } from "@/data/dashboardData";

const trendIcon = {
  up: <TrendingUp className="h-3.5 w-3.5 text-success" />,
  down: <TrendingDown className="h-3.5 w-3.5 text-destructive" />,
  stable: <Minus className="h-3.5 w-3.5 text-muted-foreground" />,
};

const TeamPerformanceTable = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.5 }}
    className="glass-card rounded-xl p-5"
  >
    <h3 className="text-sm font-semibold text-foreground mb-4">Team Performance</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="pb-2.5 text-left font-medium text-muted-foreground">Name</th>
            <th className="pb-2.5 text-right font-medium text-muted-foreground">Orders</th>
            <th className="pb-2.5 text-right font-medium text-muted-foreground">Avg Time</th>
            <th className="pb-2.5 text-right font-medium text-muted-foreground">Accuracy</th>
            <th className="pb-2.5 text-center font-medium text-muted-foreground">Trend</th>
          </tr>
        </thead>
        <tbody>
          {teamPerformance.map((member) => (
            <tr key={member.name} className="border-b border-border/50 last:border-0">
              <td className="py-2.5 font-medium text-foreground">{member.name}</td>
              <td className="py-2.5 text-right font-mono text-foreground">{member.ordersProcessed}</td>
              <td className="py-2.5 text-right font-mono text-muted-foreground">{member.avgTime}</td>
              <td className="py-2.5 text-right font-mono text-foreground">{member.accuracy}%</td>
              <td className="py-2.5 flex justify-center">{trendIcon[member.trend]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default TeamPerformanceTable;
