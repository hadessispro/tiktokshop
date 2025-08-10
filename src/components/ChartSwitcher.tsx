import { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { mode: "prices" | "orders"; onChange: (m:"prices"|"orders")=>void; extra?: ReactNode; };

const TabBtn = ({active, children, onClick}:{active?:boolean; children:ReactNode; onClick:()=>void}) => (
  <button onClick={onClick}
          className={cn("flex items-center gap-2 rounded-xl px-4 py-2 border",
            active ? "bg-white border-brand-200 shadow-sm" : "bg-gray-50 border-gray-200 text-gray-600")}>
    {children}
  </button>
);

export default function ChartSwitcher({mode, onChange, extra}:Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <TabBtn active={mode==='prices'} onClick={()=>onChange('prices')}>
        <span className="text-2xl leading-none">💲</span><span className="font-medium">Prices</span>
      </TabBtn>
      <TabBtn active={mode==='orders'} onClick={()=>onChange('orders')}>
        <span className="text-2xl leading-none">🛒</span><span className="font-medium">Orders</span>
      </TabBtn>
      <button className="rounded-xl px-4 py-2 border border-dashed text-gray-400"><Plus size={16}/></button>
      <div className="ml-auto">{extra}</div>
    </div>
  );
}
