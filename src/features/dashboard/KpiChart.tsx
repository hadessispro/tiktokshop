import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

type Point = { label: string; value: number };
export type KpiChartData = { prices: Point[]; orders: Point[] };

export default function KpiChart({ mode, data }:{ mode:"prices"|"orders"; data: KpiChartData }) {
  const series = mode === "prices" ? data.prices : data.orders;
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={series}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
