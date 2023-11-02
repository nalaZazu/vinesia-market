import { DELETE, GET, PATCH, POST } from "./Adapter/base";

export const getProductDetail = (id) => {
  return GET(`/products/overview/${id}`);
};

//invoices/show/1
