import {AppState} from "../../configs/redux.config";

const getComicsData = (state: AppState) => {
    return state.comicsData
};

export const selectorsComicsData = {
  getComicsData
};