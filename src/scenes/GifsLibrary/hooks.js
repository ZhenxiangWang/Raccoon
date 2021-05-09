import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRaccoonGifs } from "./actions";
import { raccoonGifsSelector } from "./selectors";

export const useRaccoonGifs = () => {
  const raccoonGifs = useSelector(raccoonGifsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (raccoonGifs.length === 0) {
      dispatch(fetchRaccoonGifs());
    }
  }, [raccoonGifs, dispatch, fetchRaccoonGifs]);

  return raccoonGifs;
};
