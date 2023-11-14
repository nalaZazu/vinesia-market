import { DELETE, GET, PATCH, POST } from "./Adapter/base";

export const getProductDetail = (id) => {
  return GET(`/products/overview/${id}`);
};
export const getPriceHistory = (id) => {
  return GET(`/products/priceHistory/${id}`);
};

//invoices/show/1
