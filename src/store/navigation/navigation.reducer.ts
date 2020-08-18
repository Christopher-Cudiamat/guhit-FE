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
    aboutLink: false,
    eventLink: false,
    contactLink: false,
  }
};

export const navigationReducer = (state = initialState, action: INavigationActionTypes): INavigationState => {

  switch(action.type) {
    case SET_NAVIGATION:
      Object.keys(state.data).map((el) => state.data[el] = false);
      return {...state};
    case CHANGE_VALUE:
      const newObject = Object.assign({}, state.data, {[action.name]:action.data});
      return {...state, data: {...newObject}};
    default:
      return state;
  } 
}; 