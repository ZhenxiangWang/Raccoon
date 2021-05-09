import { combineReducers } from "redux";
import AppReducer from "./components/App/reducer";
import GifsLibraryReducer from "./scenes/GifsLibrary/reducer";

export default combineReducers({
  app: AppReducer,
  gifsLibrary: GifsLibraryReducer,
});
