import {AppState} from "../../configs/redux.config";

const getProfile= (state: AppState) => {
    return state.profile
};

export const selectorsProfile = {
  getProfile
};