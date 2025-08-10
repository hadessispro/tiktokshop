import { Card, CardContent } from "@/components/ui/card";
import ChartSwitcher from "@/components/ChartSwitcher";
import KpiChart, { KpiChartData } from "./KpiChart";
import { useState } from "react";

const sample: KpiChartData = {
  prices: [
    { label: "11/7", value: 5 }, { label: "12/7", value: 6 },
    { label: "4/8", value: 0 },  { label: "5/8", value: 610 },
    { label: "6/8", value: 720 }, { label: "7/8", value: 800 },
    { label: "8/8", value: 50 },  { label: "9/8", value: 12 },
    { label: "10/8", value: 0 },
  ],
  orders: [
    { label: "11/7", value: 1 }, { label: "12/7", value: 1 }, { label: "13/7", value: 0 },
    { label: "5/8", value: 22 }, { label: "6/8", value: 25 }, { label: "7/8", value: 28 },
    { label: "8/8", value: 3 },  { label: "9/8", value: 1 },  { label: "10/8", value: 0 },
  ],
};

export default function StatChartCard() {
  const [mode, setMode] = useState<"prices" | "orders">("prices");
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6 space-y-4">
        <div>
          <div className="text-xl font-semibold">Statistical prices and orders chart</div>
          <div className="text-sm text-gray-500">Chart in 08/2025</div>
        </div>
        <ChartSwitcher mode={mode} onChange={setMode} />
        <KpiChart mode={mode} data={sample} />
      </CardContent>
    </Card>
  );
}
