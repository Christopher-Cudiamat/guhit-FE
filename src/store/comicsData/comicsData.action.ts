import {SET_COMICS_DATA} from "./comicsData.type";

export const addComicsData = (state:Object)=> {
  return {
    type: SET_COMICS_DATA,
    comicsData: state,
  }
}