import {
  UPDATE_PORTAL_INFO,
  IPortalInfoParameter,
  IPortalInfoAction,
} from './portalInfo.type'


const initialState: IPortalInfoParameter = {
  deviceType: "",  
  browserType: "",
};

export const portalInfoReducer = (state = initialState, action: IPortalInfoAction) => {
  const {type, key, value} = action;
  
  switch(type) {
    case UPDATE_PORTAL_INFO:
      if(key==="deviceType" && value === ""){
        const newValue = "desktop";
        return {...state, ["deviceType"] : newValue};
      } else {
        return {...state, [key] : value};
      }
    default:
      return state;
  } 
}; 