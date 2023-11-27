import { createSlice } from "@reduxjs/toolkit";
import session from "../services/utils/session";

const initialState = {
  isAuthenticated: session.get("vinesia_token") ? true : false,
  user: session.get("user"),
  shipmentType: session.get("shipmentType") || "1136",
  lang: session.get("lang") || "it",
};

export const accountReducer = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      session.set("user", action?.payload?.payload?.user);
      session.set("vinesia_token", action?.payload?.access_token);
      return {
        ...state,
        isAuthenticated: action?.payload?.access_token ? true : false,
        user: action?.payload?.payload?.user,
      };
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      session.set("user", null);
      session.set("vinesia_token", null);
    },
   
  },
});

/**Action creators are generated for each case reducer function  */
export const {  loginAction, logoutAction } =
  accountReducer.actions;

export default accountReducer.reducer;
