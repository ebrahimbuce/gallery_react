import { createSlice } from "@reduxjs/toolkit";

const Search_Slices = createSlice({
  name: "Search",
  initialState: {
    search_text: "",
  },
  reducers: {
    set_search_text: (state, { payload }) => {
      state.search_text = payload;
    },

    clear_search_text: (state) => {
      state.search_text = "";
    },
  },
});

export const { set_search_text, clear_search_text } = Search_Slices.actions;

export default Search_Slices.reducer;
