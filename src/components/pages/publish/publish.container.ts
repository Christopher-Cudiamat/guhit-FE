import {connect} from 'react-redux';
import Publish from "./publish.component";
import {AppState} from "../../../configs/redux.config";
import { selectorsProfile } from '../../../store/profile/profile.selectors';
import { Dispatch } from 'redux';
import { selectorsRegistration } from '../../../store/registration/registration.selector';


const mapStateToProps = (state:AppState) => {
  return{
    profile: selectorsProfile.getProfile(state),
    registration: selectorsRegistration.getRegistration(state)
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
  }
}

const PublishContainer = connect(mapStateToProps,mapStateToDispatch)(Publish);
export default PublishContainer;