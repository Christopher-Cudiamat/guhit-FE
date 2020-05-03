import {connect} from 'react-redux';
import CreatorProfile from "./creatorProfile.component";
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

const CreatorProfileContainer = connect(mapStateToProps,mapStateToDispatch)(CreatorProfile);
export default CreatorProfileContainer;