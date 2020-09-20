import {
  GET_USER_PROFILE,
  REMOVE_USER_PROFILE,
  SET_CREATOR_PROFILE,
  SET_UPDATE_PROFILE,
  SET_UPDATE_TOOLS,
  IProfileActions,
  IProfileParameter
} from './profile.type';

// TO BE USES FOR TREAMING EMAILS DONT DELETE!
// import { trimEmail } from '../../utility/formatString';

const initialState:IProfileParameter = {
  userName: "",
  profilePic: "",
  profilePicPreview: "",
  description: "",
  city: "",
  createdAt: "",
  patreon: "",
  tools: "",
  comicsSeriesMade: 0,
  novelsSeriesMade: 0,
  comicsChaptersMade: 0,
  novelsChaptersMade: 0,
  isCreator: false,
  seriesMade: [], 
  user:""
};

export const profileReducer = (state = initialState, action: IProfileActions):IProfileParameter => {

  switch(action.type) {
    case GET_USER_PROFILE:
      return {
        // TO BE USES FOR TREAMING EMAILS DONT DELETE!
        // userName: trimEmail(payload.email,"@"),
        userName: action.payload.displayName,
        profilePic: action.payload.profilePic,
        isCreator: action.payload.isCreator
      }
    case REMOVE_USER_PROFILE:
      return {  
      }
    case SET_CREATOR_PROFILE:
      return {
        userName: action.payload.displayName,
        profilePic: action.payload.profilePic,
        profilePicPreview: "",
        description: action.payload.description,
        city: action.payload.city,
        createdAt: action.payload.createdAt,
        patreon: action.payload.patreon,
        tools: action.payload.tools,
        isCreator: action.payload.isCreator,
        seriesMade: action.payload.seriesMade,
        user: action.payload.user
      }
    case SET_UPDATE_PROFILE:
      return {...state,[action.name]:action.value}
    case SET_UPDATE_TOOLS:
      let newVal = state.tools
      return {...state,[action.name]:newVal,}
    default:
      return state;
  } 
}; 