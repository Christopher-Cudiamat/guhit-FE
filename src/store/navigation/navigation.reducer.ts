import { INavigationState, CHANGE_VALUE, SET_NAVIGATION} from './navigation.type';
// import {INavigationAction, INavigationParameter} from "./navigation.type";

const initialState: INavigationState = {
  data:{
    // brandLogo: true,
    homeLink: true,
    comicsLink: false,
    novelsLink: false,
    menuLink: false,
    loginLink: false,

    libraryLink: false,
    publishLink: false,
  
  }
};

export const navigationReducer = (state = initialState, action: any): INavigationState => {
  switch(action.type) {
    case SET_NAVIGATION:
      // const newObj = Object.assign({}, state.data, action.data);
      return {...state, data: {
        brandLogo: false,
        comicsLink: false,
        novelsLink: false,
        menuLink: false,
        loginLink: false,
        libraryLink: false,
        publishLink: false,
      }};
    case CHANGE_VALUE:
      const newObject = Object.assign({}, state.data, {[action.name]:action.data});
      return {...state, data: {...newObject}};
    default:
      return state;
  } 
}; 