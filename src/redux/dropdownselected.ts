import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export const dropdownReducer = createSlice({
  name: "dropVisibility",
  initialState :{dropdownData:<any>[]},
  reducers: {
    handleSelected: (state, action: PayloadAction<any>) => {
      console.log("from action",action.payload)
      const  selectedValue  = action.payload;
      if (!state.dropdownData.includes(selectedValue)) {
        state.dropdownData = [...state.dropdownData, ...action.payload];
      } else {
        state.dropdownData = state.dropdownData.filter((data:any) => data !== action.payload
        );
      }
    },

  
  },
});

// Action creators are generated for each case reducer function
export const { handleSelected } = dropdownReducer.actions;

export default dropdownReducer.reducer;
