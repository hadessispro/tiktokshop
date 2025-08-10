import axios from "axios";

export const api = axios.create({ baseURL: "/api", timeout: 10000 });

export async function fetchDashboard() {
  return {
    monthBestSeller: { name: "NGUYEN THI THU THUY", revenue: 1580.8 },
    totals: { ordersQty: 136, totalPrice: 2200, totalShop: 1, users: { withOrder: 2, total: 2 } },
    today: { orders: 0, price: 0 },
    chart: [
      { day: "01", orders: 12, price: 210 },
      { day: "02", orders: 9, price: 165 },
      { day: "03", orders: 15, price: 320 },
      { day: "04", orders: 8, price: 140 },
      { day: "05", orders: 17, price: 410 }
    ]
  };
}
