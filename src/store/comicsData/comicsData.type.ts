export const SET_COMICS_DATA = "SET_COMICS_DATA";

export interface IComicsDataParameter {
  // image?: string,
  // title?: string,
  // genre?: string,
  // likes?: number,
  // original?: boolean,
  // trending?: boolean,
  data?:any,
}

interface IValueComicsData {
  type: typeof SET_COMICS_DATA ,
  comicsData: IComicsDataParameter,
}

export type IComicsDataAction = IValueComicsData ;