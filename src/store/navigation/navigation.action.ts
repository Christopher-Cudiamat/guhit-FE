import {
  SET_NAVIGATION, 
  CHANGE_VALUE,
  INavigationParameter,
  INavigationActionTypes,
} 
from "./navigation.type";


export const setNavigation = (state:INavigationParameter) : INavigationActionTypes => {
  return {
    type: SET_NAVIGATION,
    navigation: state,
  }
}


export const setChangeValue = (name:string, value:boolean) : INavigationActionTypes => {
  return {
    type: CHANGE_VALUE,
    name: name, 
    data: value,
  }
}
