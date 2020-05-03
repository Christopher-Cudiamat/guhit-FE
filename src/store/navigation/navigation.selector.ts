import {AppState} from "../../configs/redux.config";

const getNavigation = (state: AppState) => {
    return state.navigation
};

export const selectorsNavigation = {
    getNavigation
};