import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pages } from "../../utils/enums/pages.enum";

export interface PageState {
  selectedPage: string;
}

const initialState: PageState = {
  selectedPage: Pages.Home,
};

const pagesSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<string>) => {
        state.selectedPage = action.payload;
      },
  },
});

export default pagesSlice.reducer;
export const { changePage } = pagesSlice.actions;