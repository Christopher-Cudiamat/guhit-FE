import {
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS_FB,
  LOGIN_SUCCESS,
  LOGOUT,
  IRegistrationParameter,
} from './registration.type';

const initialState: IRegistrationParameter = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
  email: ""
} 

export const registrationReducer = (state = initialState, action:any) => {
  const {type,payload} = action;

  switch(type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.newToken);
      return {
        ...state,
        // ...payload,
        isAuthenticated: true,
        email: payload.email,
        token: payload.newToken
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