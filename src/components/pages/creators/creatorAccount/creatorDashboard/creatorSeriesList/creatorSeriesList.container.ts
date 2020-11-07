import {connect} from 'react-redux';
import CreatorSeriesList from "./creatorSeriesList.component";
import * as navAction from '../../../../../../store/navigation/navigation.action';
import { Dispatch } from 'redux';

const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
    setNavValue: () => dispatch(navAction.setNavigation()),
  }
}

const CreatorSeriesListContainer = connect(null,mapStateToDispatch)(CreatorSeriesList);
export default CreatorSeriesListContainer;