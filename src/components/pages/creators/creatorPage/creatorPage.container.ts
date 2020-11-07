import {connect} from 'react-redux';
import CreatorPage from "./creatorPage.component";
import * as navAction from '../../../../store/navigation/navigation.action';
import { Dispatch } from 'redux';

const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
    setNavValue: () => dispatch(navAction.setNavigation()),
  }
}

const CreatorPageContainer = connect(null,mapStateToDispatch)(CreatorPage);
export default CreatorPageContainer;
