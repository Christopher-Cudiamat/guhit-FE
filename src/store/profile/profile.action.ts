import { 
  GET_USER_PROFILE,
  REMOVE_USER_PROFILE,
  SET_CREATOR_PROFILE
 } from "./profile.type"

export const setUserProfile = (payload:any) => {
  console.log("DN", payload.profilePic);
  console.log("PP", payload.displayName);
  return {
    type: GET_USER_PROFILE,
    payload,
  }
}

export const removeUserProfile = () => {
  return {
    type: REMOVE_USER_PROFILE,
  }
}


export const setCreatorProfile = (payload:any) => {
  return {
    type: SET_CREATOR_PROFILE,
    payload,
  }
}
