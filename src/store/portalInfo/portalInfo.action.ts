import { 
  UPDATE_PORTAL_INFO, IPortalInfoAction 
} from 
"./portalInfo.type";


export const setPortalInfo = (key: string, value:string): IPortalInfoAction => {
  return {
    type: UPDATE_PORTAL_INFO,
    key,
    value,
  }
}