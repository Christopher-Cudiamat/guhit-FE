import {
  SET_MODAL,
  CHANGE_MODAL,
  IModalAction}  
from "./modal.type";

export const setModal = () : IModalAction => {
  return {
    type: SET_MODAL,
  }
}

export const setChangeValue = (name:string, value:boolean) : IModalAction => {
  return {
    type: CHANGE_MODAL,
    name: name, 
    data: value,
  }
}