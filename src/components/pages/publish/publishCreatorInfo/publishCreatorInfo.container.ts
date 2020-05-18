import {connect} from 'react-redux';
import PublishCreatorInfo from "./publishCreatorInfo.component";
import {AppState} from "../../../../configs/redux.config";
import { selectorsRegistration } from '../../../../store/registration/registration.selector';
import * as profileAction from '../../../../store/profile/profile.action';
import { Dispatch } from 'redux';
import { selectorsProfile } from '../../../../store/profile/profile.selectors';

const mapStateToProps = (state:AppState) => {
  return{
    registration: selectorsRegistration.getRegistration(state),
    profile: selectorsProfile.getProfile(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setCreatorProfile:(data:any) => dispatch(profileAction.setCreatorProfile(data)), 
    setUpdateProfile:(name:string, value:string) => dispatch(profileAction.setUpdateProfile(name, value)),
    setUpdateTools:(name:string, value:string) => dispatch(profileAction.setUpdateTools(name, value)),
  }
}

const PublishCreatorInfoContainer = connect(mapStateToProps,mapStateToDispatch)(PublishCreatorInfo);
export default PublishCreatorInfoContainer;