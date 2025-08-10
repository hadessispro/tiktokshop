import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import DashboardPage from "@/features/dashboard/DashboardPage";

const router = createBrowserRouter([
  { path: "/", element: <AppLayout />, children: [{ index: true, element: <DashboardPage /> }] },
]);

export default function AppRouter() { return <RouterProvider router={router} />; }
