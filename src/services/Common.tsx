import { DELETE, GET, PATCH, POST } from "./Adapter/base";

export const getFilters = () => {
  return GET(`products/filters`);
};


