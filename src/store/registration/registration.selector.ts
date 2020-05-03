import {AppState} from "../../configs/redux.config";

const getRegistration = (state: AppState) => {
    return state.registration
};

export const selectorsRegistration = {
    getRegistration
};