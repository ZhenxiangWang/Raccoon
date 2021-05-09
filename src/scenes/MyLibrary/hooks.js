import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { favoriteGifsSelector } from "../GifsLibrary/selectors";
import { updateFavoriteList } from "../GifsLibrary/actions";

// A custom hook that builds on useLocation to parse
// the query string for you.
export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const useMyRaccoonGifs = () => {
  const myRaccoonGifs = useSelector(favoriteGifsSelector);
  const dispatch = useDispatch();
  const query = useQuery();
  const receivedGifIds = Array.from(query).map(([, value]) => value);

  useEffect(() => {
    if (receivedGifIds.length > 0) {
      dispatch(updateFavoriteList(receivedGifIds));
    }
  }, []);

  return myRaccoonGifs;
};
