import {connect} from 'react-redux';
import CreatorDashboard from "./creatorDashboard.component";
import {AppState} from "../../../../../configs/redux.config";
import { selectorsProfile } from '../../../../../store/profile/profile.selectors';
import { selectorsRegistration } from '../../../../../store/registration/registration.selector';
import { Dispatch } from 'redux';


const mapStateToProps = (state:AppState) => {
  return{
    profile: selectorsProfile.getProfile(state),
    registration: selectorsRegistration.getRegistration(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
   
  }
}

const CreatorDashboardContainer = connect(mapStateToProps,mapStateToDispatch)(CreatorDashboard);
export default CreatorDashboardContainer;