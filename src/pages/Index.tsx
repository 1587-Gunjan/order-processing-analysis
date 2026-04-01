import { Package, Clock, CheckCircle, AlertTriangle, Activity, Download } from "lucide-react";
import { downloadCsv } from "@/lib/downloadCsv";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import MetricCard from "@/components/MetricCard";
import OrderVolumeChart from "@/components/OrderVolumeChart";
import ProcessingTimeChart from "@/components/ProcessingTimeChart";
import StatusBreakdownChart from "@/components/StatusBreakdownChart";
import ChannelEfficiencyChart from "@/components/ChannelEfficiencyChart";
import TeamPerformanceTable from "@/components/TeamPerformanceTable";
import RecentOrdersTable from "@/components/RecentOrdersTable";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/60 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-primary p-2">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground tracking-tight">Order Processing Efficiency</h1>
              <p className="text-xs text-muted-foreground">Operations Dashboard · March 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Live data
            </motion.div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                  <Download className="h-3.5 w-3.5" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => downloadCsv("all")}>All Data</DropdownMenuItem>
                <DropdownMenuItem onClick={() => downloadCsv("orders")}>Order Volume</DropdownMenuItem>
                <DropdownMenuItem onClick={() => downloadCsv("processingTime")}>Processing Time</DropdownMenuItem>
                <DropdownMenuItem onClick={() => downloadCsv("team")}>Team Performance</DropdownMenuItem>
                <DropdownMenuItem onClick={() => downloadCsv("recentOrders")}>Recent Orders</DropdownMenuItem>
                <DropdownMenuItem onClick={() => downloadCsv("channels")}>Channel Efficiency</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Total Orders" value="1,890" change="↑ 14.5% vs last month" changeType="positive" icon={Package} delay={0.05} />
          <MetricCard title="Avg Processing Time" value="12.4m" change="↓ 1.8 min improvement" changeType="positive" icon={Clock} delay={0.1} />
          <MetricCard title="Fulfillment Rate" value="96.8%" change="↑ 0.6% from target" changeType="positive" icon={CheckCircle} delay={0.15} />
          <MetricCard title="Backlog" value="47" change="↑ 12 orders pending" changeType="negative" icon={AlertTriangle} delay={0.2} />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <OrderVolumeChart />
          <ProcessingTimeChart />
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StatusBreakdownChart />
          <ChannelEfficiencyChart />
          <TeamPerformanceTable />
        </div>

        {/* Recent Orders */}
        <RecentOrdersTable />
      </main>
    </div>
  );
};

export default Index;
