import {connect} from 'react-redux';
import Loader from "./loader.component";
import {AppState} from "../../configs/redux.config";
import {setIsLoading} from "../../store/loader/loader.action";
import {ILoaderParameter} from "../../store/loader/loader.type";
import { selectorsIsLoading } from '../../store/loader/loader.selector';
import { Dispatch } from 'redux';

const mapStateToProps = (state:AppState) => {
  return{
    loader: selectorsIsLoading.getIsLoading(state)
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setIsLoading: (isLoading:ILoaderParameter) => dispatch(setIsLoading(isLoading)),
  }
}

const LoaderContainer = connect(mapStateToProps,mapStateToDispatch)(Loader);
export default LoaderContainer;