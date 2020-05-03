import {
   IAlertParameter,
   SET_ALERT, 
   REMOVE_ALERT } from "./alert.type";


const initialState:Array<IAlertParameter> = [];

export const alertReducer = (state = initialState, action:any):Array<{}> => {
  const {type, payload} = action;
  switch(type) {
    case SET_ALERT :
      state.pop();
      return [...state,payload];
    case REMOVE_ALERT :
      return state = [];
    default:
      return state;
  } 
}