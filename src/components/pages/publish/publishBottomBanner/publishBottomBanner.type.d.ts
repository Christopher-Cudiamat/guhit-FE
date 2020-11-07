export interface PublishBottomBannerPropTypes {
  isACreator: boolean,
  isRegistered: boolean,
  changeNavValue: (name:string, value: boolean) => void,
  setNavValue: () => void
}