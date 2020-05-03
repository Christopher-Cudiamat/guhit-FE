import {AppState} from "../../configs/redux.config";

const getModal = (state: AppState) => {
    return state.modal
};

export const selectorsModal = {
    getModal
};