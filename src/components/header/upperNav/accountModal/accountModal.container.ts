import {connect} from 'react-redux';
import AccountModal from "./accountModal.component";
import {AppState} from "../../../../configs/redux.config";
import { Dispatch } from 'redux';
import * as setIsRegistration from '../../../../store/registration/registration.action';
import * as modalAction from '../../../../store/modal/modal.action';
import { selectorsNavigation } from '../../../../store/navigation/navigation.selector';
import * as navAction from '../../../../store/navigation/navigation.action';
import * as profileAction from '../../../../store/profile/profile.action';
import { selectorsProfile } from '../../../../store/profile/profile.selectors';


const mapStateToProps = (state:AppState) => {
  return{
    profile: selectorsProfile.getProfile(state),
    navData: selectorsNavigation.getNavigation(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    logout: (data:any) => dispatch(setIsRegistration.setLogout()),
    setModalValue: (data:any) => dispatch(modalAction.setModal(data)),
    setNavValue: (data:any) => dispatch(navAction.setNavigation(data)),
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
    removeUserProfile: () => dispatch(profileAction.removeUserProfile()),
  }
}

const AccountModalContainer = connect(mapStateToProps,mapStateToDispatch)(AccountModal);
export default AccountModalContainer;