import {connect} from 'react-redux';
import Series from "./series.component";
import {AppState} from "../../../../configs/redux.config";
import { selectorsRegistration } from '../../../../store/registration/registration.selector';
import { selectorsPortalInfo } from '../../../../store/portalInfo/portalInfo.selectors';
import { selectorsProfile } from '../../../../store/profile/profile.selectors';


const mapStateToProps = (state:AppState) => {
  return{
    registration: selectorsRegistration.getRegistration(state),
    portalInfo: selectorsPortalInfo.getPortalInfo(state),
    profile: selectorsProfile.getProfile(state)
  }
}

const  SeriesContainer = connect(mapStateToProps)(Series);

export default SeriesContainer;