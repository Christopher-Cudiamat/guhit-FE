import { 
  GET_USER_PROFILE,
  REMOVE_USER_PROFILE,
  SET_CREATOR_PROFILE,
  SET_UPDATE_PROFILE,
  SET_UPDATE_TOOLS
 } from "./profile.type"

export const setUserProfile = (payload:any) => {
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

export const setUpdateProfile = (name: string,value:boolean|string|number) => {
  return {
    type: SET_UPDATE_PROFILE,
    name,
    value
  }
}

export const setUpdateTools = (name: string,value:string) => {
  return {
    type: SET_UPDATE_PROFILE,
    name,
    value
  }
}