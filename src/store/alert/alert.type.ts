export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export interface IAlertParameter {
  id: string,
  msg: string,
  alertType: string,
}


export interface ISetAlert {
  type: typeof SET_ALERT,
  payload: IAlertParameter,
}

export interface IRemoveAlert {
  type: typeof REMOVE_ALERT,
  payload: string,
}


export type IAlertAction = ISetAlert | IRemoveAlert;