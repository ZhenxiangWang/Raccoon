import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import { store, persistor } from "./store";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </App>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
