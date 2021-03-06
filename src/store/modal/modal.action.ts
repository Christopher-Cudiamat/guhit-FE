import {
  SET_MODAL,
  CHANGE_MODAL,
  IModalAction,
  IModalParameter}  
from "./modal.type";

export const setModal = (state:IModalParameter) : IModalAction => {
  return {
    type: SET_MODAL,
    modal: state, 
  }
}

export const setChangeValue = (name:string, value:boolean) : IModalAction => {
  return {
    type: CHANGE_MODAL,
    name: name, 
    data: value,
  }
}