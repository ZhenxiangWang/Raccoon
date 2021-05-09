import * as t from "./actionTypes";

const initialState = {
  loading: false,
  raccoonGifs: [],
};

const GifsLibraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.REQUEST_RACCOON_GIFS:
      return { ...state, loading: true };
    case t.RECEIVE_RACCOON_GIFS:
      return {
        ...state,
        loading: false,
        raccoonGifs: action.data || state.raccoonGifs,
      };
    case t.REQUEST_FAVORITE:
      return { ...state, loading: true };
    case t.RECEIVE_FAVORITE: {
      const newRaccoonGifs = state.raccoonGifs.map((gif) =>
        action.data.id === gif.id ? { ...gif, favorited: true } : gif
      );
      return { ...state, loading: false, raccoonGifs: newRaccoonGifs };
    }
    case t.REQUEST_UNFAVORITE:
      return {
        ...state,
        loading: true,
      };
    case t.RECEIVE_UNFAVORITE: {
      const newRaccoonGifs = state.raccoonGifs.map((gif) =>
        action.data.id === gif.id ? { ...gif, favorited: false } : gif
      );
      return { ...state, loading: false, raccoonGifs: newRaccoonGifs };
    }
    case t.REQUEST_UPDATE_FAVORITE_LIST:
      return { ...state, loading: true };
    case t.RECEIVE_UPDATE_FAVORITE_LIST: {
      const newRaccoonGifs = state.raccoonGifs.map((gif) =>
        action.data.includes(gif.id)
          ? { ...gif, favorited: true }
          : { ...gif, favorited: false }
      );
      return { ...state, loading: false, raccoonGifs: newRaccoonGifs };
    }
    default:
      return state;
  }
};

export default GifsLibraryReducer;
