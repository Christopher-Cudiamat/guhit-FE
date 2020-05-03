
import {connect} from 'react-redux';
import SignUp from "./signUp.component";
import {AppState} from "../../../configs/redux.config";
import { selectorsRegistration } from '../../../store/registration/registration.selector';
import * as alertAction from '../../../store/alert/alert.action';
import * as registerAction from '../../../store/registration/registration.action';
import * as profileAction from '../../../store/profile/profile.action';
import { Dispatch } from 'redux';
import { selectorsAlert } from '../../../store/alert/alert.selector';




const mapStateToProps = (state:AppState) => {
  return{
    registration: selectorsRegistration.getRegistration(state),
    alert: selectorsAlert.getAlert(state)
  }
} 

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setRegistration:(data:any) => dispatch(registerAction.setRegistration(data)), 
    setAlert: (msg:string,alertType:string) => dispatch(alertAction.setAlert(msg,alertType)),
    removeAlert: () => dispatch(alertAction.removeAlert()),
    setUserProfile:(data:any) => dispatch(profileAction.setUserProfile(data)),
  }
}


const SignUpContainer = connect(mapStateToProps,mapStateToDispatch)(SignUp);
export default SignUpContainer;