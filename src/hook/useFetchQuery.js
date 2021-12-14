import { useDispatch, useSelector } from "react-redux";

import { Set_Search_Actions } from "../redux/actions/Search_Actions";
import {
  resetStateScroll,
  setPage,
} from "../redux/slices/Scroll_Infinty_Slices";
import { clear_search_text } from "../redux/slices/Search_Slices";

export default function useFetchQuery() {
  const { results, hasMore } = useSelector((state) => state.ScrollInfinty);

  const dispatch = useDispatch();

  //* Function update page fetch
  const updatePage = () => dispatch(setPage());

  //* Function reset state
  const resetState = async () => {
    await dispatch(clear_search_text());
    dispatch(resetStateScroll());
  };

  //* Function search query
  const handleSearch = (value) => {
    resetState();
    dispatch(Set_Search_Actions(value));
  };

  return {
    results,
    updatePage,
    handleSearch,
    hasMore,
  };
}
