import {connect} from 'react-redux';
import Comics from "./comics.component";
import {AppState} from "../../../configs/redux.config";
import {addComicsData} from "../../../store/comicsData/comicsData.action";
import {IComicsDataParameter} from "../../../store/comicsData/comicsData.type";
import {  selectorsComicsData } from '../../../store/comicsData/comicsData.selectors';
import { Dispatch } from 'redux';

const mapStateToProps = (state:AppState) => {
  return{
    data: selectorsComicsData.getComicsData(state)
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setComicsData: (state:IComicsDataParameter) => dispatch( addComicsData(state)),
  }
}

const ComicsContainer = connect(mapStateToProps,mapStateToDispatch)(Comics);
export default ComicsContainer;