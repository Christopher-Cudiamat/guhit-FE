import {connect} from 'react-redux';
import PublishBanner from "./publishBanner.component";
import {AppState} from "../../../../configs/redux.config";
import { selectorsProfile } from '../../../../store/profile/profile.selectors';
import { selectorsRegistration } from '../../../../store/registration/registration.selector';


const mapStateToProps = (state:AppState) => {
  return{
    profile: selectorsProfile.getProfile(state),
    registration: selectorsRegistration.getRegistration(state)
  }
}


const PublishBannerContainer = connect(mapStateToProps)(PublishBanner);

export default PublishBannerContainer;