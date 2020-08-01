import { string } from "yargs";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_SUCCESS_FB = " REGISTER_SUCCESS_FB";
export const REGISTER_SUCCESS_GOOGLE = " REGISTER_SUCCESS_GOOGLE";
export const LOGIN_SUCCESS = " LOGIN_SUCCESS";
export const LOGOUT = " LOGOUT"; 

export interface IRegistrationParameter {
  token: string | null,
  isAuthenticated: boolean,
  loading: boolean,
  user: null,
  email:string,
}

interface ISetRegistration {
  type:typeof REGISTER_SUCCESS,
  payload: any,
}

interface ISetLogout {
  type:typeof LOGOUT,
}

interface ISetLogin {
  type:typeof LOGIN_SUCCESS,
  payload: any,
}

interface ISetFacebookRegistration {
  type:typeof REGISTER_SUCCESS_FB,
  payload: any,
}

interface ISetGoogleRegistration {
  type:typeof REGISTER_SUCCESS_GOOGLE,
  payload: any,
}

export type IRegistrationAction = 
ISetRegistration |
ISetLogout |
ISetLogin |
ISetFacebookRegistration |
ISetGoogleRegistration 
;