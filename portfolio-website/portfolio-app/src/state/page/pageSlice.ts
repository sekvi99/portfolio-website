import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pages } from "../../utils/enums/pages.enum";

interface PageState {
  selectedPage: string;
}

const getInitialPage = (): string => {
  const path = window.location.pathname.replace("/", "");
  return Object.values(Pages).includes(path as Pages) ? path : Pages.Home;
};

const initialState: PageState = {
  selectedPage: getInitialPage(),
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
