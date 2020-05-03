import {
  SET_NAVIGATION,
  CHANGE_VALUE,
  INavigationAction,
  INavigationParameter} 
from "./navigation.type";

import { IChangeValueNavigation } from "./navigation.type";

export const setNavigation = (state:INavigationParameter) : INavigationAction => {
  return {
    type: SET_NAVIGATION,
    navigation: state,
  }
}


export const setChangeValue = (name:string, value:boolean) : IChangeValueNavigation => {
  return {
    type: CHANGE_VALUE,
    name: name,
    data: value,
  }
}