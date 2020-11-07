import {connect} from 'react-redux';
import PublishHeader from "./publishHeader.component";
import {AppState} from "../../../../../configs/redux.config";
import { selectorsProfile } from '../../../../../store/profile/profile.selectors';
import { Dispatch } from 'redux';


const mapStateToProps = (state:AppState) => {
  return{
    profile: selectorsProfile.getProfile(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
   
  }
}

const PublishHeaderContainer = connect(mapStateToProps,mapStateToDispatch)(PublishHeader);
export default PublishHeaderContainer;