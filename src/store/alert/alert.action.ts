import {v4 as uuidv4} from 'uuid'
import {
  SET_ALERT,
  REMOVE_ALERT,
  ISetAlert,
  IRemoveAlert,
} from './alert.type';


export const setAlert = (msg:string,alertType:string): ISetAlert =>  {
    const id = uuidv4();
    return{
      type: SET_ALERT,
      payload:{msg, alertType, id}
    }
}

export const removeAlert = (): IRemoveAlert =>  {
  const id = uuidv4();
  return{
    type: REMOVE_ALERT,
    payload:id
  }
}