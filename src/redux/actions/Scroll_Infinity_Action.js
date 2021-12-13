import { setHasMore, setResults } from "../slices/Scroll_Infinty_Slices";

export const setResultsAction = (payload) => async (dispatch) =>
  dispatch(setResults(payload));

export const setHasMoreAction = (payload) => async (dispatch) =>
  dispatch(setHasMore(payload));
