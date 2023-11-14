import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: {
    isVisible: false,
  },
  videoModal: {
    id: "",
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
    isModel: (state, action) => {
      state.videoModal.isVisible = action.payload.isVisible;
      state.videoModal.id = action.payload.id;
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  handleAllModals,
  isModel
} = modalReducer.actions;

export default modalReducer.reducer;
