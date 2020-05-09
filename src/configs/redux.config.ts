import {combineReducers} from "redux";
import {createBrowserHistory} from "history";
import { loaderReducer } from "../store/loader/loader.reducer";
import { registrationReducer } from "../store/registration/registration.reducer";
import { comicsDataReducer } from "../store/comicsData/comicsData.reducer";
import { navigationReducer } from "../store/navigation/navigation.reducer";
import { modalReducer } from "../store/modal/modal.reducer";
import { alertReducer } from "../store/alert/alert.reducer";
import { profileReducer } from "../store/profile/profile.reducer";
import { portalInfoReducer } from "../store/portalInfo/portalInfo.reducer";

export const history = createBrowserHistory();

export const appReducer = combineReducers({
  "loader":loaderReducer,
  "registration": registrationReducer,
  "comicsData": comicsDataReducer,
  "navigation": navigationReducer,
  "modal": modalReducer,
  "alert": alertReducer,
  "profile": profileReducer,
  "portalInfo": portalInfoReducer,
});


//to clear all app state on reset

export const rootReducer = (state:any, action: any) => {
  if(action.type === 'APP_DATA_RESET'){
    state = undefined
  }
  return appReducer(state,action)
}

export type AppState = ReturnType<typeof rootReducer>

