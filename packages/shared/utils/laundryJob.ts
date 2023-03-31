import { JobItemsResponse } from "../openapi";

export const calculateTotalValue = (items: JobItemsResponse[]): number => {
  return items.reduce(
    (currentTotal: number, currentItem: JobItemsResponse) =>
      currentTotal + currentItem.quantity * currentItem.item.price,
    0
  );
};
