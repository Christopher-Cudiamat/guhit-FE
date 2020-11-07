import { 
  CHANGE_MODAL,
  SET_MODAL,
  IModalAction,
  IModalParameter
} from './modal.type';


export const initialState: IModalParameter = {
  searchModal: false,
  drawerModal: false,
  notifModal: false,
  libraryModal: false,
  accountModal: false, 
  openModal: false,
};

export const modalReducer = (state = initialState, action: IModalAction): IModalParameter => {
  switch(action.type) {
    case SET_MODAL:
      return {
        searchModal: false,
        drawerModal: false,
        notifModal: false,
        libraryModal: false,
        accountModal: false,
        openModal: false,
      };
    case CHANGE_MODAL:
      const newObject = Object.assign({}, state, {[action.name]: action.data});
      return {...state, ...newObject};
    default:
      return state;
  } 
}; 