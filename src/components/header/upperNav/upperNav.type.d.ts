import { IProfileParameter } from "../../../store/profile/profile.type";
import { IRegistrationParameter } from "../../../store/registration/registration.type";
import { INavigationParameter } from "../../../store/navigation/navigation.type";
import { IModalParameter } from "../../../store/modal/modal.type";

export interface UpperNavPropTypes {
  profile: IProfileParameter,
  registration: IRegistrationParameter,
  setNavValue: () => void, 
  changeNavValue: (name:string, value: boolean) => void,
  navData: INavigationParameter,
  modalData: IModalParameter,
  setModalValue: () => void,
  changeModalValue: (name:string, value: boolean) => void,
}