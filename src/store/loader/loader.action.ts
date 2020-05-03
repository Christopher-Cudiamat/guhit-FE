import {IS_LOADING, ILoaderAction, ILoaderParameter} from "./loader.type";

export const setIsLoading = (state:ILoaderParameter) : ILoaderAction => {
  return {
    type: IS_LOADING,
    loader: state,
  }
}