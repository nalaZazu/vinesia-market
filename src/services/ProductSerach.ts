import { DELETE, GET, PATCH, POST } from "./Adapter/base";


export const getProductSearch=(data:any )=>{
    return POST(`products/search`, data);
  }
  