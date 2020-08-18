export const SET_NAVIGATION = "SET_NAVIGATION";
export const CHANGE_VALUE = "CHANGE_VALUE";

export interface INavigationParameter {
  [x: string]: any;
  //Links
  brandLogo?: boolean | string,
  homeLink?: boolean | string,
  comicsLink?: boolean | string,
  novelsLink?: boolean | string,
  loginLink?: boolean | string,
  menuLink?: boolean | string,
  libraryLink?:  boolean | string,
  publishLink?:  boolean | string,
  creatorLink?:  boolean | string,
  aboutLink?:  boolean | string,
  eventsLink?:  boolean | string,
  contactLink?:  boolean | string,
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

export type INavigationActionTypes = INavigationAction | IChangeValueNavigation;