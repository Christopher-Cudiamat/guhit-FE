import {v4 as uuidv4} from 'uuid'
import {
  SET_ALERT,
  REMOVE_ALERT,

} from './alert.type';


export const setAlert = (msg:string,alertType:string) =>  {
    const id = uuidv4();
    return{
      type: SET_ALERT,
      payload:{msg, alertType, id}
    }
}

export const removeAlert = () =>  {
  const id = uuidv4();
  return{
    type: REMOVE_ALERT,
    payload:id
  }
}