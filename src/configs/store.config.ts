import {applyMiddleware, createStore, compose} from "redux";
import {rootReducer} from "./redux.config";
import thunk from "redux-thunk";
import {routerMiddleware} from "connected-react-router";
import {history} from "./redux.config";
import { loadState, saveState } from "../utility/setLocalStorage";

import throttle from 'lodash/throttle';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk.withExtraArgument({history})
    )
  ),
);

store.subscribe(throttle(() => {
  saveState({
    navigation: store.getState().navigation,
    registration: store.getState().registration,
    profile: store.getState().profile
  });
}, 1000));

export default store;



// const persistedState = loadState();
// const store = createStore(
//   app,
//   persistedState
// );
// store.subscribe(() => {
//   saveState({
//     todos: store.getState().todos
//   });
// });