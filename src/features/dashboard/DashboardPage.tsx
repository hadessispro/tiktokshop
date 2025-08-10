import { useQuery } from "@tanstack/react-query";
import { fetchDashboard } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import StatChartCard from "./StatChartCard";
import SellerChartCard from "./SellerChartCard";
import RankingTables from "./RankingTables";

export default function DashboardPage() {
  const { data } = useQuery({ queryKey: ["dashboard"], queryFn: fetchDashboard });
  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Card className="rounded-2xl">
          <CardContent className="p-6 flex items-center gap-6">
            <div className="flex-1">
              <div className="text-sm text-gray-500">Congratulations</div>
              <div className="text-xl font-semibold">{data.monthBestSeller.name} 🎉</div>
              <div className="mt-3 text-2xl font-bold">${data.monthBestSeller.revenue}</div>
              <button className="mt-4 rounded-lg bg-brand-600 text-white px-4 py-2 text-sm">VIEW SALES</button>
            </div>
            <div className="h-28 w-28 grid place-items-center text-5xl">🏆</div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-6 xl:col-span-2">
          <Kpi title="Total Orders quantity" value={data.totals.ordersQty} />
          <Kpi title="Total Price" value={`$${(data.totals.totalPrice/1000).toFixed(1)}K`} />
          <Kpi title="Total Shop" value={data.totals.totalShop} />
          <Kpi title="User / Total User" value={`${data.totals.users.withOrder} / ${data.totals.users.total}`} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Kpi title="Total Orders (Today)" value={data.today.orders} />
        <Kpi title="Total Price (Today)" value={`$${data.today.price.toFixed(1)}`} />
        <Card className="rounded-2xl">
          <CardContent className="p-6 h-full flex items-center justify-center text-gray-400">
            Coming soon: Best seller of day
          </CardContent>
        </Card>
      </div>

      <StatChartCard />
      <SellerChartCard />
      <RankingTables />
    </div>
  );
}

function Kpi({ title, value }:{ title:string; value:string|number }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6">
        <div className="text-sm text-gray-500">{title}</div>
        <div className="mt-2 text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
