import {connect} from 'react-redux';
import PublishComicsChapter from "./publishComicsChapter.component";
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
    setUpdateProfile:(name:string, value:boolean) => dispatch(profileAction.setUpdateProfile(name,value)), 
  }
}

const PublishComicsChapterContainer = connect(mapStateToProps,mapStateToDispatch)(PublishComicsChapter);
export default PublishComicsChapterContainer;