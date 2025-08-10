import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="h-16 border-b bg-white">
      <div className="h-full px-5 flex items-center justify-between">
        <div className="text-sm text-gray-500">PATCH 1.4</div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-lg hover:bg-gray-50">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white grid place-items-center">1</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-50"><Settings size={18} /></button>
          <Avatar className="h-8 w-8"><AvatarFallback>A</AvatarFallback></Avatar>
        </div>
      </div>
    </header>
  );
}
