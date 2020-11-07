import {connect} from 'react-redux';
import PublishComicsSeries from "./publishComicsSeries.component";
import {AppState} from "../../../../../configs/redux.config";
import { selectorsRegistration } from '../../../../../store/registration/registration.selector';
import { selectorsProfile } from '../../../../../store/profile/profile.selectors';
// import * as profileAction from '../../../../store/profile/profile.action';
import { Dispatch } from 'redux';
// import { selectorsProfile } from '../../../../store/profile/profile.selectors';

const mapStateToProps = (state:AppState) => { 
  return{
    registration: selectorsRegistration.getRegistration(state),
    profile: selectorsProfile.getProfile(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
  }
}

const PublishComicsSeriesContainer = connect(mapStateToProps,mapStateToDispatch)(PublishComicsSeries);
export default PublishComicsSeriesContainer;