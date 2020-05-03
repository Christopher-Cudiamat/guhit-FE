import {AppState} from "../../configs/redux.config";

const getAlert = (state: AppState) => {
    return state.alert
};

export const selectorsAlert = {
    getAlert
};