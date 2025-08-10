import { ReactNode } from "react";
export function Card({ className='', children }:{className?:string; children:ReactNode}) {
  return <div className={`bg-white shadow-sm border border-gray-100 ${className}`}>{children}</div>;
}
export function CardContent({ className='', children }:{className?:string; children:ReactNode}) {
  return <div className={className}>{children}</div>;
}
