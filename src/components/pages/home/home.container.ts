import {connect} from 'react-redux';
import Home from "./home.component";
import {AppState} from "../../../configs/redux.config";
// import {setIsRegistration} from "../../../store/registration/registration.action";
// import {IRegistrationParameter} from "../../../store/registration/registration.type";
import { selectorsRegistration } from '../../../store/registration/registration.selector';
import { Dispatch } from 'redux';
import * as navAction from '../../../store/navigation/navigation.action';
import * as modalAction from '../../../store/modal/modal.action';
import { selectorsProfile } from '../../../store/profile/profile.selectors';



const mapStateToProps = (state:AppState) => {
  return{
    registration: selectorsRegistration.getRegistration(state),
    profile: selectorsProfile.getProfile(state),
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {

    setModalValue: () => dispatch(modalAction.setModal()), 
    setNavValue: () => dispatch(navAction.setNavigation()),
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
    changeModalValue: (name:string, value: boolean) => dispatch(modalAction.setChangeValue(name, value))
  }
}

const HomeContainer = connect(mapStateToProps,mapStateToDispatch)(Home);
export default HomeContainer;