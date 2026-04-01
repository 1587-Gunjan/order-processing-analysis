import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { efficiencyByChannel } from "@/data/dashboardData";

const ChannelEfficiencyChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.45 }}
    className="glass-card rounded-xl p-5"
  >
    <h3 className="text-sm font-semibold text-foreground mb-4">Efficiency by Channel (%)</h3>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={efficiencyByChannel} layout="vertical" barSize={18}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" horizontal={false} />
        <XAxis type="number" domain={[60, 100]} tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="channel" tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} width={50} />
        <Tooltip contentStyle={{ borderRadius: "8px", fontSize: 13, border: "1px solid hsl(220,15%,90%)" }} formatter={(value: number) => `${value}%`} />
        <Bar dataKey="efficiency" fill="hsl(152, 60%, 42%)" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
);

export default ChannelEfficiencyChart;
