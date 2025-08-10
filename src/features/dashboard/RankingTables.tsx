import DataTable from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ShopRank, UserRank } from "./types";

const userColumns: ColumnDef<UserRank>[] = [
  { header: "RANK", accessorKey: "rank" },
  { header: "USER", accessorKey: "user" },
  { header: "TEAM", accessorKey: "team" },
  { header: "TOTAL ORDER", accessorKey: "totalOrder" },
  { header: "TOTAL QUANTITY", accessorKey: "totalQuantity" },
  { header: "TOTAL REVENUE", accessorKey: "totalRevenue" },
  { header: "DATE", accessorKey: "date" },
];

const shopColumns: ColumnDef<ShopRank>[] = [
  { header: "RANK", accessorKey: "rank" },
  { header: "SHOP ID", accessorKey: "shopId" },
  { header: "SHOP NAME", accessorKey: "shopName" },
  { header: "TOTAL ORDER", accessorKey: "totalOrder" },
  { header: "TOTAL QUANTITY", accessorKey: "totalQuantity" },
  { header: "TOTAL REVENUE", accessorKey: "totalRevenue" },
  { header: "TIME", accessorKey: "time" },
];

const userData: UserRank[] = []; // replace with API data
const shopData: ShopRank[] = [];

export default function RankingTables() {
  return (
    <div className="space-y-6">
      <DataTable columns={userColumns} data={userData} />
      <DataTable columns={shopColumns} data={shopData} />
    </div>
  );
}
