import { 
  CHANGE_VALUE,
  SET_NAVIGATION,
  INavigationActionTypes,
  INavigationParameter
} from './navigation.type';

const initialState: INavigationParameter = {
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
  
};

export const navigationReducer = (state = initialState, action: INavigationActionTypes): INavigationParameter => {

  switch(action.type) {
    case SET_NAVIGATION:
      Object.keys(state).map((el) => state[el] = false);
      return {...state};
    case CHANGE_VALUE:
      const newObject = Object.assign({}, state, {[action.name]:action.data});
      return {...newObject};
    default:
      return state;
  } 
}; 