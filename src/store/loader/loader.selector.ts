import {AppState} from "../../configs/redux.config";

const getIsLoading = (state: AppState) => {
    return state.loader
};

export const selectorsIsLoading = {
    getIsLoading
};