import * as t from "./actionTypes";
import raccoonGifs from "./raccoonGifs";

export const requestRaccoonGifs = () => ({
  type: t.REQUEST_RACCOON_GIFS,
});
export const receiveRaccoonGifs = (data) => ({
  type: t.RECEIVE_RACCOON_GIFS,
  data,
});
export const fetchRaccoonGifs = () => (dispatch) => {
  dispatch(requestRaccoonGifs());
  // Use a fixed data set at the moment. Data can be crawled in the future.
  dispatch(receiveRaccoonGifs(raccoonGifs));
};

export const requestFavorite = () => ({
  type: t.REQUEST_FAVORITE,
});
export const receiveFavorite = (data) => ({
  type: t.RECEIVE_FAVORITE,
  data,
});
export const favorite = (data) => (dispatch) => {
  dispatch(requestFavorite());
  // Update database if there is one.
  dispatch(receiveFavorite(data));
};

export const requestUnfavorite = () => ({
  type: t.REQUEST_UNFAVORITE,
});
export const receiveUnfavorite = (data) => ({
  type: t.RECEIVE_UNFAVORITE,
  data,
});
export const unfavorite = (data) => (dispatch) => {
  dispatch(requestUnfavorite());
  // Update database if there is one.
  dispatch(receiveUnfavorite(data));
};

export const requestUpdateFavoriteList = () => ({
  type: t.REQUEST_UPDATE_FAVORITE_LIST,
});
export const receiveUpdateFavoriteList = (data) => ({
  type: t.RECEIVE_UPDATE_FAVORITE_LIST,
  data,
});
export const updateFavoriteList = (data) => (dispatch) => {
  dispatch(requestUpdateFavoriteList());
  // Update database if there is one.
  dispatch(receiveUpdateFavoriteList(data));
};
