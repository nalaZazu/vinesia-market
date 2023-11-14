import { DELETE, GET, PATCH, POST } from "./Adapter/base";


export const getProductSearch=( )=>{
    return POST(`products/search`);
  }
  