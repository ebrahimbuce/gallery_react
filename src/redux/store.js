import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import ScrollInfinty from "./slices/Scroll_Infinty_Slices";

import Search from "./slices/Search_Slices";

const store = configureStore(
  {
    reducer: {
      ScrollInfinty,
      Search,
    },
  },
  composeWithDevTools()
);

export default store;
