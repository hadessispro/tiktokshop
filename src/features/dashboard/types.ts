export type UserRank = {
  rank: number;
  user: string;
  team: string;
  totalOrder: number;
  totalQuantity: number;
  totalRevenue: number;
  date: string;
};

export type ShopRank = {
  rank: number;
  shopId: string;
  shopName: string;
  totalOrder: number;
  totalQuantity: number;
  totalRevenue: number;
  time: string;
};
