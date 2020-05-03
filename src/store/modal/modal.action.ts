import {
  SET_MODAL,
  CHANGE_MODAL,
  IModalAction,
  IModalParameter} 
from "./modal.type";

import { IChangeValueModal } from "./modal.type";

export const setModal = (state:IModalParameter) : IModalAction => {
  return {
    type: SET_MODAL,
    modal: state,
  }
}


export const setChangeValue = (name:string, value:boolean) : IChangeValueModal => {
  return {
    type: CHANGE_MODAL,
    name: name,
    data: value,
  }
}