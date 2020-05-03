import {IS_LOADING} from './loader.type';
import {ILoaderAction, ILoaderParameter} from "./loader.type";

const initialState: ILoaderParameter = {
  isLoading: false,
};

export const loaderReducer = (state = initialState, action: ILoaderAction): ILoaderParameter => {
  switch(action.type) {
    case IS_LOADING:
      return {...state, isLoading :action.loader.isLoading };
    default:
      return state;
  } 
}; 