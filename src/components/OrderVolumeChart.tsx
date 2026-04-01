import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { orderVolumeData } from "@/data/dashboardData";

const OrderVolumeChart = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.3 }}
    className="glass-card rounded-xl p-5"
  >
    <h3 className="text-sm font-semibold text-foreground mb-4">Order Volume Trend</h3>
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={orderVolumeData} barGap={2}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 12, fill: "hsl(220, 10%, 50%)" }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(0, 0%, 100%)",
            border: "1px solid hsl(220, 15%, 90%)",
            borderRadius: "8px",
            fontSize: 13,
          }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="processed" name="Processed" fill="hsl(210, 80%, 55%)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="returned" name="Returned" fill="hsl(0, 72%, 55%)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
);

export default OrderVolumeChart;
