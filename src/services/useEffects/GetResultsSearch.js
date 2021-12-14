import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHasMoreAction,
  setResultsAction,
} from "../../redux/actions/Scroll_Infinity_Action";

export default function GetResultsSearch() {
  const { search_text } = useSelector((state) => state.Search);
  const { page } = useSelector((state) => state.ScrollInfinty);
  const dispatch = useDispatch();

  //* Function get data
  useEffect(() => {
    const getData = async () => {
      try {
        let { data, status } = await axios.get(
          `/search/photos?page=${page}&query=${
            search_text === "" ? "random" : search_text
          }`
        );
        if (status === 200) {
          dispatch(setResultsAction(data.results));
          dispatch(setHasMoreAction(data.total_pages));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search_text]);
}
