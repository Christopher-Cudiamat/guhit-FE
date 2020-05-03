export const IS_LOADING = "IS_LOADING";

export interface ILoaderParameter {
  isLoading: boolean,
}

interface IValueLoader {
  type: typeof IS_LOADING,
  loader: ILoaderParameter,
}

export type ILoaderAction = IValueLoader;