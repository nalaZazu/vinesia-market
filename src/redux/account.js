import { createSlice } from "@reduxjs/toolkit";
import session from "../services/utils/session";

const initialState = {
  isAuthenticated: session.get("adr_token") ? true : false,
  user: session.get("user"),
  shipmentType: session.get("shipmentType") || "1136",
  lang: session.get("lang") || "it",
};

export const accountReducer = createSlice({
  name: "account",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      session.set("user", action?.payload);
      session.set("token", action?.payload?.token);
      return {
        ...state,
        isAuthenticated: action?.payload?.token ? true : false,
        user: action?.payload,
      };
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      session.set("user", null);
      session.set("token", null);
    },
   
  },
});

/**Action creators are generated for each case reducer function  */
export const {  loginAction, logoutAction } =
  accountReducer.actions;

export default accountReducer.reducer;
