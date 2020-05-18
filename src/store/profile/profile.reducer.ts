import {
  GET_USER_PROFILE,
  REMOVE_USER_PROFILE,
  SET_CREATOR_PROFILE,
  SET_UPDATE_PROFILE,
  SET_UPDATE_TOOLS
} from './profile.type';
import { trimEmail } from '../../utility/formatString';


const initialState ={
  userName: "",
  profilePic: "",
  description: "",
  city: "",
  joinedDate: "",
  patreon: "",
  tools: "",
  comicsSeriesMade: 0,
  novelsSeriesMade: 0,
  comicsChaptersMade: 0,
  novelsChaptersMade: 0,
  isCreator: false,
};

export const profileReducer = (state = initialState, action: any) => {
  const {type, payload,name,value} = action;
  
  switch(type) {
    case GET_USER_PROFILE:
      return {
        // userName: trimEmail(payload.email,"@"),
        userName: payload.displayName,
        profilePic: payload.profilePic,
        isCreator: payload.isCreator
      }
    case REMOVE_USER_PROFILE:
      return {  
      }
    case SET_CREATOR_PROFILE:

      return {
        userName: payload.displayName,
        profilePic: payload.profilePic,
        profilePicPreview: "",
        description: payload.description,
        city: payload.city,
        joinedDate: payload.joinedDate,
        patreon: payload.patreon,
        tools: payload.tools,
        comicsSeriesMade: 0,
        novelsSeriesMade: 0,
        comicsChaptersMade: 0,
        novelsChaptersMade: 0,
        isCreator: false,
      }
    case SET_UPDATE_PROFILE:
      return {
        ...state,
        [name]:value
      }
    case SET_UPDATE_TOOLS:
      let newVal = state.tools
      return {
        ...state,
        [name]:newVal,
      }
    default:
      return state;
  } 
}; 