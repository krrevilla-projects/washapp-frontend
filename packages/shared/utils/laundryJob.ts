import { JobItemsResponse } from "../openapi";

export const calculateTotalValue = (items?: JobItemsResponse[]): number => {
  if (!items) {
    return 0;
  }

  return items?.reduce(
    (currentTotal: number, currentItem: JobItemsResponse) =>
      currentTotal + currentItem.quantity * currentItem.item.price,
    0
  );
};
