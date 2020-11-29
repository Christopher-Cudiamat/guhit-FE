import {IProfileParameter} from "../../../../store/profile/profile.type";
import {IRegistrationParameter} from "../../../../store/registration/registration.type";
import {IPortalInfoParameter} from "../../../../store/portalInfo/portalInfo.type";

export interface PublishPropTypes {
  registration: IRegistrationParameter,
  profile: IProfileParameter,
  changeNavValue: (name:string, value: boolean) => void,
  setNavValue: () => void,
  portalInfo: IPortalInfoParameter,
}