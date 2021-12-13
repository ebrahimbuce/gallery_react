import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHasMoreAction,
  setResultsAction,
} from "../redux/actions/Scroll_Infinity_Action";
import { Set_Search_Actions } from "../redux/actions/Search_Actions";
import {
  resetStateScroll,
  setPage,
} from "../redux/slices/Scroll_Infinty_Slices";
import { clear_search_text } from "../redux/slices/Search_Slices";

export default function useFetchQuery() {
  const { search_text } = useSelector((state) => state.Search);

  const { page, results, hasMore } = useSelector(
    (state) => state.ScrollInfinty
  );

  const dispatch = useDispatch();

  //* Function update page fetch
  const updatePage = () => dispatch(setPage());

  //* Function reset state
  const resetState = () => {
    dispatch(clear_search_text());
    dispatch(resetStateScroll());
  };

  const handleSearch = (value) => {
    resetState();
    dispatch(Set_Search_Actions(value));
  };

  //* Function get data
  useEffect(() => {
    axios
      .get(
        `/search/photos?page=${page}&query=${
          search_text === "" ? "random" : search_text
        }`
      )
      .then((res) => {
        dispatch(setResultsAction(res.data.results));
        dispatch(setHasMoreAction(res.data.total_pages));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search_text, page]);

  return {
    results,
    updatePage,
    handleSearch,
    search_text,
    hasMore,
  };
}
