
import { INavigationActionTypes} from "../../../store/navigation/navigation.type";

import { IModalAction} from "../../../store/modal/modal.type";

export interface HomeTypes {
  setNavValue: () => INavigationActionTypes, 
  setModalValue: () => IModalAction,
  changeNavValue:(name: string, value: boolean) => INavigationActionTypes,
  changeModalValue: (name: string, value: boolean) => IModalAction, 
}