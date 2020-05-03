export const SET_NAVIGATION = "SET_NAVIGATION";
export const CHANGE_VALUE = "CHANGE_VALUE";

export interface INavigationParameter {

  //Links
  brandLogo?: boolean,
  homeLink?: boolean,
  comicsLink?: boolean,
  novelsLink?: boolean,
  loginLink?: boolean,
  menuLink?: boolean,
  libraryLink?:  boolean,
  publishLink?:  boolean,
}

export interface INavigationState {
  data: INavigationParameter
}

export interface IValueNavigation {
  type: typeof SET_NAVIGATION,
  navigation: INavigationParameter,
}

export interface IChangeValueNavigation {
  type: typeof CHANGE_VALUE,
  name: string,
  data: boolean,
}

export type INavigationAction = IValueNavigation;