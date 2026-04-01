import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { processingTimeData } from "@/data/dashboardData";

const ProcessingTimeChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.35 }}
    className="glass-card rounded-xl p-5"
  >
    <h3 className="text-sm font-semibold text-foreground mb-4">Avg. Processing Time (min)</h3>
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={processingTimeData}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" vertical={false} />
        <XAxis dataKey="day" tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
        <YAxis domain={[8, 18]} tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(0, 0%, 100%)",
            border: "1px solid hsl(220, 15%, 90%)",
            borderRadius: "8px",
            fontSize: 13,
          }}
        />
        <ReferenceLine y={12} stroke="hsl(36, 95%, 55%)" strokeDasharray="6 4" label={{ value: "Target", fill: "hsl(36, 95%, 55%)", fontSize: 11 }} />
        <Line type="monotone" dataKey="avgMinutes" name="Avg Time" stroke="hsl(220, 60%, 20%)" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(220, 60%, 20%)" }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </motion.div>
);

export default ProcessingTimeChart;
