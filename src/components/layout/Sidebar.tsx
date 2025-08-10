import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, ShoppingCart, MessageSquare, Store, Cloud } from "lucide-react";

const Item = ({to, label, Icon}:{to:string; label:string; Icon:any}) => (
  <NavLink
    to={to}
    className={({isActive}) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium mx-3
      ${isActive ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:bg-white"}`}
  >
    <Icon size={18} /> {label}
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r bg-[#fbfbfd]">
      <div className="flex items-center gap-2 px-4 h-16 border-b">
        <div className="h-8 w-8 rounded-lg bg-brand-500" />
        <div className="font-semibold">FECOM <span className="text-xs bg-yellow-300 rounded px-2 py-0.5">Silver</span></div>
      </div>
      <div className="py-3 space-y-1">
        <Item to="/" label="Dashboards" Icon={LayoutDashboard} />
        <Item to="/crm" label="CRM" Icon={Users} />
        <Item to="/orders" label="Orders" Icon={ShoppingCart} />
        <Item to="/message" label="Message" Icon={MessageSquare} />
        <Item to="/shop" label="Shop" Icon={Store} />
        <Item to="/cloud" label="Cloud" Icon={Cloud} />
      </div>
    </aside>
  );
}
