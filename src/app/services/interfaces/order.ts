export interface Order {
  id: number;
  username: string;
  amount:number;
}

export type OrderRequest = Omit<Order, "id">;
