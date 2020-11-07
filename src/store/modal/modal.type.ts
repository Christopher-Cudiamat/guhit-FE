export const SET_MODAL = "SET_MODAL";
export const CHANGE_MODAL = "CHANGE_MODAL";

export interface IModalParameter {
  searchModal?: boolean,
  drawerModal?: boolean,
  notifModal?: boolean,
  libraryModal?: boolean,
  accountModal?: boolean,
  openModal: boolean,
  switchToDesktopModal?: boolean,
}

export interface IValueModal {
  type: typeof SET_MODAL,
}

export interface IChangeValueModal {
  type: typeof CHANGE_MODAL
  name: string,
  data: boolean,
}

export type IModalAction = IValueModal | IChangeValueModal;