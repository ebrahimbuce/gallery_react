import { set_search_text } from "../slices/Search_Slices";

export const Set_Search_Actions = (payload) => async (dispatch) =>
  dispatch(set_search_text(payload));
