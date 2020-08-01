import {
  SET_ALERT, 
  REMOVE_ALERT, 
  IAlertParameter,
  IAlertAction
} 
from "./alert.type";


const initialState:Array<IAlertParameter> = [];

export const alertReducer = (state = initialState, action:IAlertAction):Array<IAlertParameter | string> => {
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