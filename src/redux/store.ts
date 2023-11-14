import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./account";
import modalReducer from "./modalVisibility";
import  dropdownReducer  from "./dropdownselected";

export default configureStore({
  reducer: {
    account: accountReducer,
    modalState: modalReducer,
    dropdown: dropdownReducer,
  },
});
