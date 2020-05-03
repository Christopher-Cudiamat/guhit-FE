import {SET_COMICS_DATA} from './comicsData.type';
import {IComicsDataAction, IComicsDataParameter} from "./comicsData.type";

const initialState: IComicsDataParameter = {
  data : {}
};

export const comicsDataReducer = (state = initialState, action: IComicsDataAction): IComicsDataParameter => {
  switch(action.type) {
    case SET_COMICS_DATA:
      return {...state,data: {...action.comicsData}};
    default:
      return state;
  } 
}; 