export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const REMOVE_USER_PROFILE = "REMOVE_USER_PROFILE";
export const SET_CREATOR_PROFILE = "SET_CREATOR_PROFILE";
export const SET_UPDATE_PROFILE = "SET_UPDATE_PROFILE";
export const SET_UPDATE_TOOLS = "SET_UPDATE_TOOLS";


export interface IProfileParameter {
  userName?: string,
  profilePic?: string,
  profilePicPreview?: string,
  description?: string,
  city?: string,
  createdAt?: string,
  patreon?: string,
  tools?: string,
  comicsSeriesMade?: number,
  novelsSeriesMade?: number, 
  comicsChaptersMade?: number,
  novelsChaptersMade?: number,
  isCreator?: boolean, 
  seriesMade?: [],
  user?: string,
};

export interface ISetUserProfile {
  type: typeof GET_USER_PROFILE,
  payload: any
} 

//TO BE REMOVED WHEN WE CODE THE REMOVE USER PROFILE IN ACCOUNT LINK INSIDE DRAWER
export interface IRemoveUserProfile {
  type: typeof REMOVE_USER_PROFILE,
}

export interface ISetCreatorProfile { 
  type: typeof SET_CREATOR_PROFILE,
  payload: any
}

export interface ISetUpdateProfile {
  type: typeof SET_UPDATE_PROFILE,
  name: string,
  value: boolean|string|number
}

export interface ISetUpdateTools {
  type: typeof SET_UPDATE_TOOLS,
  name: string,
  value: string,
}

export type IProfileActions = ISetUserProfile | IRemoveUserProfile | ISetCreatorProfile | ISetUpdateProfile | ISetUpdateTools ;