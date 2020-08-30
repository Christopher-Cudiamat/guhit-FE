
import {connect} from 'react-redux';
import Login from "./login.component";
import {AppState} from "../../../configs/redux.config";
import * as loginAction from '../../../store/registration/registration.action';
import * as profileAction from '../../../store/profile/profile.action';
import * as alertAction from '../../../store/alert/alert.action';
import { Dispatch } from 'redux';
import { signUpGoogle, signIn } from '../../../services/signUp';
import { selectorsAlert } from '../../../store/alert/alert.selector';
import { selectorsRegistration } from '../../../store/registration/registration.selector';
import { selectorsProfile } from '../../../store/profile/profile.selectors';
import * as registerAction from '../../../store/registration/registration.action';


const mapStateToProps = (state:AppState) => {
  return{
    alert: selectorsAlert.getAlert(state),
    registration: selectorsRegistration.getRegistration(state),
    profile: selectorsProfile.getProfile(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setRegFacebook:(data:any) => dispatch(loginAction.setFacebookRegistration(data)), 
    setAlert: (msg:string,alertType:string) => dispatch(alertAction.setAlert(msg,alertType)),
    removeAlert: () => dispatch(alertAction.removeAlert()),
    setRegGoogle:(data:any) => {
      signUpGoogle(data);
      dispatch(loginAction.setGoogleRegistration(data))  
    }, 
    setLogin:(data:any) => dispatch(loginAction.setLogin(data)), 
    setUserProfile:(data:any) => dispatch(profileAction.setUserProfile(data)), 
    setCreatorProfile:(data:any) => dispatch(profileAction.setCreatorProfile(data)), 
    setGoogleRegistration:(data:any) => dispatch(registerAction.setGoogleRegistration(data)), 
    setFaceBookRegistration:(data:any) => dispatch(registerAction.setFaceBookRegistration(data))
    
  }
}


const LoginContainer = connect(mapStateToProps,mapStateToDispatch)(Login);
export default LoginContainer;