import { createSlice } from "@reduxjs/toolkit";

const ScrollInfinty = createSlice({
  name: "ScrollInfinty",
  initialState: {
    results: [],
    page: 1,
    isLoading: false,
    hasMore: true,
  },
  reducers: {
    setResults: (state, { payload }) => {
      const isResults = payload.length > 0;
      const isState = state.results.filter(
        (item, i, a) => a.findIndex((t) => t.id === item.id) === i
      );
      state.results = isResults ? [...isState, ...payload] : [];
    },
    setPage: (state) => {
      state.page = state.page + 1;
    },
    setHasMore: (state, { payload }) => {
      state.hasMore = state.page < payload;
    },
    resetStateScroll: (state) => {
      state.results = [];
      state.page = 1;
      state.isLoading = false;
      state.hasMore = true;
    },
  },
});

export const { setResults, setPage, setHasMore, resetStateScroll } =
  ScrollInfinty.actions;

export default ScrollInfinty.reducer;
