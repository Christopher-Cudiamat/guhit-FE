export const UPDATE_PORTAL_INFO = "UPDATE_PORTAL_INFO";

export interface IPortalInfoParameter {
  deviceType: string,
  browserType: string,
}

export interface ISetPortalInfo {
  type: typeof UPDATE_PORTAL_INFO,
  key: string,
  value: string,
}

export type IPortalInfoAction = ISetPortalInfo;