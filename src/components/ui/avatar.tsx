import { ReactNode } from "react";
export function Avatar({ className='', children }:{className?:string; children:ReactNode}) {
  return <div className={`inline-flex items-center justify-center rounded-full bg-gray-200 ${className}`}>{children}</div>;
}
export function AvatarImage() { return null; }
export function AvatarFallback({ children }:{children:ReactNode}) { return <>{children}</>; }
