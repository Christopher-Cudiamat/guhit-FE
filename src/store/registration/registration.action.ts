
import {
  REGISTER_SUCCESS,
  REGISTER_SUCCESS_FB,
  REGISTER_SUCCESS_GOOGLE,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  IRegistrationAction,
} from './registration.type';


  export const setRegistration = (data:any): IRegistrationAction => {
    return {
      type:  REGISTER_SUCCESS,
      payload: data,
    }
  }

  export const setLogout = (): IRegistrationAction => {
    return {
      type:  LOGOUT,
    }
  }

  export const setLogin= (data:any): IRegistrationAction => {
    return {
      type:  LOGIN_SUCCESS,
      payload: data,
    }
  }

  export const setFacebookRegistration = (data:any): IRegistrationAction => {
    return {
      type:  REGISTER_SUCCESS_FB,
      payload: data,
    }
  }

  export const setGoogleRegistration= (data:any): IRegistrationAction => {
    return {
      type:  REGISTER_SUCCESS_GOOGLE,
      payload: data,
    }
  }

  export const setFaceBookRegistration= (data:any): IRegistrationAction => {
    return {
      type:  REGISTER_SUCCESS_FB,
      payload: data,
    }
  }


