import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import {AppState} from "../../../configs/redux.config";
import LowerNav from "./lowerNav.component";

import { selectorsNavigation } from '../../../store/navigation/navigation.selector';
import * as navAction from '../../../store/navigation/navigation.action';
import * as modalAction from '../../../store/modal/modal.action';
import { selectorsModal } from '../../../store/modal/modal.selector';



const mapStateToProps = (state:AppState) => {
  return{
    navData: selectorsNavigation.getNavigation(state),
    modalData: selectorsModal.getModal(state),
  
  } 
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return { 
    setModalValue: (data:any) => dispatch(modalAction.setModal(data)), 
    setNavValue: (data:any) => dispatch(navAction.setNavigation(data)),
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
    changeModalValue: (name:string, value: boolean) => dispatch(modalAction.setChangeValue(name, value))
  }
}

const LowerNavContainer = connect(mapStateToProps,mapStateToDispatch)(LowerNav);
export default LowerNavContainer;
