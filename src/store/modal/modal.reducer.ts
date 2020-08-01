import { 
  IModalState,
  CHANGE_MODAL,
  SET_MODAL,
  IModalAction
} from './modal.type';


const initialState: IModalState = {
  data:{
    searchModal: false,
    drawerModal: false,
    notifModal: false,
    libraryModal: false,
    accountModal: false, 
    openModal: false,
  }
};

export const modalReducer = (state = initialState, action: IModalAction): IModalState => {
  switch(action.type) {
    case SET_MODAL:
      return {...state, data: {
        searchModal: false,
        drawerModal: false,
        notifModal: false,
        libraryModal: false,
        accountModal: false,
        openModal: false,
      }};
    case CHANGE_MODAL:
      const newObject = Object.assign({}, state.data, {[action.name]: action.data});
      return {...state, data: {...newObject}};
    default:
      return state;
  } 
}; 