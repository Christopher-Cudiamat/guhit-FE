import {connect} from 'react-redux';
import GlobalSearchListMobile from "./globalSearchListMobile.component";
import * as navAction from '../../../../../store/navigation/navigation.action';
import * as modalAction from '../../../../../store/modal/modal.action';
import { Dispatch } from 'redux';

const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
    setNavValue: () => dispatch(navAction.setNavigation()),
    setModalValue: () => dispatch(modalAction.setModal()),
  }
}

const GlobalSearchListMobileContainer = connect(null,mapStateToDispatch)(GlobalSearchListMobile);
export default GlobalSearchListMobileContainer;
