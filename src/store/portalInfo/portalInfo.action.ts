export const UPDATE_PORTAL_INFO = "UPDATE_PORTAL_INFO";

export const setPortalInfo = (key: string, value:string) => {
  return {
    type: UPDATE_PORTAL_INFO,
    key,
    value,
  }
}