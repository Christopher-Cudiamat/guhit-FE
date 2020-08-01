import { 
  INavigationState,
  CHANGE_VALUE,
  SET_NAVIGATION,
  INavigationActionTypes
} from './navigation.type';

const initialState: INavigationState = {
  data:{
    homeLink: true,
    comicsLink: false,
    novelsLink: false, 
    menuLink: false,
    loginLink: false, 
    libraryLink: false,
    publishLink: false,
    creatorLink: false,
  }
};

export const navigationReducer = (state = initialState, action: INavigationActionTypes): INavigationState => {
  switch(action.type) {
    case SET_NAVIGATION:
      return {...state, data: {
        brandLogo: false,
        comicsLink: false,
        novelsLink: false,
        menuLink: false,
        loginLink: false,
        libraryLink: false,
        publishLink: false,
        creatorLink: false,
      }};
    case CHANGE_VALUE:
      const newObject = Object.assign({}, state.data, {[action.name]:action.data});
      return {...state, data: {...newObject}};
    default:
      return state;
  } 
}; 