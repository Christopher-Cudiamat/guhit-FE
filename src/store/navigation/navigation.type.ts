export const SET_NAVIGATION = "SET_NAVIGATION";
export const CHANGE_VALUE = "CHANGE_VALUE";

export interface INavigationParameter {
  [x: string]: any;
  brandLogo?: boolean,
  homeLink?: boolean,
  comicsLink?: boolean,
  novelsLink?: boolean,
  loginLink?: boolean,
  menuLink?: boolean,
  libraryLink?:  boolean,
  publishLink?:  boolean,
  creatorLink?:  boolean,
  aboutLink?:  boolean,
  eventsLink?:  boolean,
  contactLink?:  boolean,
}

export interface IValueNavigation {
  type: typeof SET_NAVIGATION,
}

export interface IChangeValueNavigation {
  type: typeof CHANGE_VALUE,
  name: string,
  data: boolean,
} 

export type INavigationAction = IValueNavigation;

export type INavigationActionTypes = INavigationAction | IChangeValueNavigation;