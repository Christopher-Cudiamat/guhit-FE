import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS_FB,
  LOGIN_SUCCESS,
  LOGOUT,
} from './registration.type';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
} 

export const registrationReducer = (state = initialState, action:any) => {
  const {type,payload} = action;

  switch(type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      }
    case REGISTER_FAILED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      }
    case LOGOUT: 
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      }
    case  REGISTER_SUCCESS_FB:
      console.log("FACEBOOK PAYLOAD",payload);
    case  REGISTER_SUCCESS_FB:
      console.log("GOOGLE PAYLOAD", payload);
    default:
      return state;
  }
}