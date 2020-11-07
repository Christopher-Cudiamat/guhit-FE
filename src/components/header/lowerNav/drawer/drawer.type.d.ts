import { IProfileParameter } from "../../../store/profile/profile.type";
import { IRegistrationParameter } from "../../../store/registration/registration.type";
import { INavigationParameter } from "../../../store/navigation/navigation.type";
import { IModalParameter } from "../../../store/modal/modal.type";

export interface DrawerPropTypes {
  setNavValue: () => void, 
  changeNavValue: (name:string, value: boolean) => void,
  navData: INavigationParameter,
  modalData: IModalParameter,
  changeModalValue: (name:string, value: boolean) => void,
}