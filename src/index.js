import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import burgerReducer from "./redux/reducer/burgerReducer.js";
import orderReducer from "./redux/reducer/orderReducer.js";
import signupLoginReducer from "./redux/reducer/signupLoginReducer.js";
const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log("my loggerMiddleware : Dispatching==> ", action);
      console.log("my loggerMiddleware : State before==> ", store.getState());
      const result = next(action);
      console.log("my loggerMiddleware : State after==> ", store.getState());
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  burgerReducer,
  orderReducer,
  signupLoginReducer,
});
const middlewares = [loggerMiddleware, thunk];
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
