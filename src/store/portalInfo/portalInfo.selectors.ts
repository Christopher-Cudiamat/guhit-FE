import {AppState} from "../../configs/redux.config";

const getPortalInfo= (state: AppState) => {
    return state.portalInfo
};

export const selectorsPortalInfo = {
  getPortalInfo
};