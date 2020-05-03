import {
  GET_USER_PROFILE,
  REMOVE_USER_PROFILE,
  SET_CREATOR_PROFILE
} from './profile.type';
import { trimEmail } from '../../utility/formatString';


const initialState ={

};

export const profileReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  
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
        description: payload.description,
        isCreator: payload.isCreator,
        city: payload.city,
        joinedDate: payload.joinedDate,
        patreon: payload.patreon,
        tools: payload.tools,
        seriesMade: 1,
        chaptersMade: 0,
        comicsSeriesMade: 0,
        novelsSeriesMade: 0,
      }
    default:
      return state;
  } 
}; 