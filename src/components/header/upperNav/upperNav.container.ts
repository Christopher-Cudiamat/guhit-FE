import {connect} from 'react-redux';
import UpperNav from "./upperNav.component";
import {AppState} from "../../../configs/redux.config";
import { selectorsRegistration } from '../../../store/registration/registration.selector';
import { Dispatch } from 'redux';
import { selectorsNavigation } from '../../../store/navigation/navigation.selector';
import * as navAction from '../../../store/navigation/navigation.action';
import * as modalAction from '../../../store/modal/modal.action';
import { selectorsModal } from '../../../store/modal/modal.selector';
import { selectorsProfile } from '../../../store/profile/profile.selectors';



const mapStateToProps = (state:AppState) => {
  return{
    profile: selectorsProfile.getProfile(state),
    registration: selectorsRegistration.getRegistration(state),
    navData: selectorsNavigation.getNavigation(state),
    modalData: selectorsModal.getModal(state),
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setNavValue: () => dispatch(navAction.setNavigation()),
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
    setModalValue: () => dispatch(modalAction.setModal()),
    changeModalValue: (name:string, value: boolean) => dispatch(modalAction.setChangeValue(name, value)),
  }
}

const UpperNavContainer = connect(mapStateToProps,mapStateToDispatch)(UpperNav);
export default UpperNavContainer;