import {
  SET_NAVIGATION, 
  CHANGE_VALUE,
  INavigationParameter,
  INavigationActionTypes,
} 
from "./navigation.type";


export const setNavigation = () : INavigationActionTypes => {
  return {
    type: SET_NAVIGATION,
  }
}


export const setChangeValue = (name:string, value:boolean) : INavigationActionTypes => {
  return {
    type: CHANGE_VALUE,
    name: name, 
    data: value,
  }
}
