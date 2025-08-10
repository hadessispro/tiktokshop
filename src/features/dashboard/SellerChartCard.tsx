import { Card, CardContent } from "@/components/ui/card";
import ChartSwitcher from "@/components/ChartSwitcher";
import KpiChart, { KpiChartData } from "./KpiChart";
import { useMemo, useState } from "react";

const users = [
  { id: "u1", name: "NGUYEN THI THU THUY" },
  { id: "u2", name: "TRAN VAN A" },
];

function getDataByUser(_: string, _from: string, _to: string): KpiChartData {
  return {
    prices: [
      { label: "01", value: 0 }, { label: "02", value: 0 }, { label: "03", value: 0 },
      { label: "05", value: 600 }, { label: "06", value: 720 }, { label: "07", value: 800 },
      { label: "08", value: 50 },
    ],
    orders: [
      { label: "01", value: 0 }, { label: "02", value: 0 }, { label: "03", value: 0 },
      { label: "05", value: 22 }, { label: "06", value: 25 }, { label: "07", value: 28 },
      { label: "08", value: 3 },
    ],
  };
}

export default function SellerChartCard() {
  const [mode, setMode] = useState<"prices" | "orders">("prices");
  const [userId, setUserId] = useState<string>("");
  const [from, setFrom] = useState<string>("2025-07-11");
  const [to, setTo] = useState<string>("2025-08-10");
  const data = useMemo(() => getDataByUser(userId, from, to), [userId, from, to]);

  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6 space-y-4">
        <div>
          <div className="text-xl font-semibold">User Order Day by Seller Chart</div>
          <div className="text-sm text-gray-500">Chart in 08/2025</div>
        </div>
        <ChartSwitcher
          mode={mode}
          onChange={setMode}
          extra={
            <div className="flex flex-wrap items-center gap-3">
              <select value={userId} onChange={e=>setUserId(e.target.value)} className="h-10 rounded-xl border px-3 bg-white">
                <option value="">Select User</option>
                {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
              </select>
              <input type="date" className="h-10 rounded-xl border px-3 bg-white" value={from} onChange={e=>setFrom(e.target.value)} />
              <input type="date" className="h-10 rounded-xl border px-3 bg-white" value={to} onChange={e=>setTo(e.target.value)} />
            </div>
          }
        />
        <KpiChart mode={mode} data={data} />
      </CardContent>
    </Card>
  );
}
