export const SET_MODAL = "SET_MODAL";
export const CHANGE_MODAL = "CHANGE_MODAL";

export interface IModalParameter {
  //Modals
  
  searchModal?: boolean,
  drawerModal?: boolean,
  notifModal?: boolean,
  libraryModal?: boolean,
  accountModal?: boolean,
  openModal: boolean,
  switchToDesktopModal?: boolean,
}

export interface IModalState {
  data: IModalParameter
}

export interface IValueModal {
  type: typeof SET_MODAL,
  modal: IModalParameter,
}

export interface IChangeValueModal {
  type: typeof CHANGE_MODAL
  name: string,
  data: boolean,
}

export type IModalAction = IValueModal;