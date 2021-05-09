import { createSelector } from "reselect";

export const loadingSelector = (state) => state.gifsLibrary.loading;

export const raccoonGifsSelector = (state) => state.gifsLibrary.raccoonGifs;

export const favoriteGifsSelector = createSelector(
  raccoonGifsSelector,
  (raccoonGifs) => raccoonGifs?.filter((gif) => gif.favorited)
);
