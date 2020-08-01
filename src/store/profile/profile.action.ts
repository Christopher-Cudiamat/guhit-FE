import { 
  GET_USER_PROFILE,
  REMOVE_USER_PROFILE,
  SET_CREATOR_PROFILE,
  SET_UPDATE_PROFILE,
  SET_UPDATE_TOOLS,
  IProfileParameter,
  IProfileActions 
 } from "./profile.type"

export const setUserProfile = (data:any): IProfileActions => {
  return {
    type: GET_USER_PROFILE,
    payload:data,
  }
}

//TO BE REMOVED WHEN WE CODE THE REMOVE USER PROFILE IN ACCOUNT LINK INSIDE DRAWER
export const removeUserProfile = (): IProfileActions => {
  return {
    type: REMOVE_USER_PROFILE,
  } 
}

export const setCreatorProfile = (data:any): IProfileActions => {
  return {
    type: SET_CREATOR_PROFILE,
    payload:data,
  }
}

export const setUpdateProfile = (name: string,value:boolean|string|number): IProfileActions => {
  return {
    type: SET_UPDATE_PROFILE,
    name,
    value
  }
}

export const setUpdateTools = (name: string,value:string): IProfileActions => {
  return {
    type: SET_UPDATE_TOOLS,
    name,
    value
  }
}