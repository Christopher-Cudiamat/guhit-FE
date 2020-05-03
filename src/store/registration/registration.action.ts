
import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS_FB,
  REGISTER_SUCCESS_GOOGLE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './registration.type';


  export const setRegistration = (data:any) => {
    return {
      type:  REGISTER_SUCCESS,
      payload: data,
    }
  }

  export const setLogout = () => {
    return {
      type:  LOGOUT,
  
    }
  }

  export const setLogin= (data:any) => {
    return {
      type:  LOGIN_SUCCESS,
      payload: data,
    }
  }

  export const setFacebookRegistration= (data:any) => {
    return {
      type:  REGISTER_SUCCESS_FB,
      payload: data,
    }
  }

  export const setGoogleRegistration= (data:any) => {
    return {
      type:  REGISTER_SUCCESS_GOOGLE,
      payload: data,
    }
  }


