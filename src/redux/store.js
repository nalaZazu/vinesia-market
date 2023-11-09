import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./account";
import modalReducer from "./modalVisibility";

export default configureStore({
  reducer: {
    account: accountReducer,
    modalState: modalReducer,
  
  },
});
