import { DELETE, GET, PATCH, POST } from "./Adapter/base";

export const getProductDetail = (id: Number) => {
  return GET(`/products/overview/${id}`);
};
export const getPriceHistory = (id: Number) => {
  return GET(`/products/priceHistory/${id}`);
};

//invoices/show/1
