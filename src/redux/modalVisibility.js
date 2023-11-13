import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: {
    isVisible: false,
  },
  videoModal: {
    isVisible: false,
    data: null,
  },

  isLoading: false,
};

export const modalReducer = createSlice({
  name: "modalVisibility",
  initialState,
  reducers: {
    handleAllModals: (state, action) => {
      return { ...state, ...action?.payload };
    },
    // deleteConsigneeModal: (state, action) => {
    //   console.log(action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  addConsigneeAction,
  editConsigneeAction,
  updateConsigneeAction,
  handleAllModals,
  addProcessModal,
} = modalReducer.actions;

export default modalReducer.reducer;
