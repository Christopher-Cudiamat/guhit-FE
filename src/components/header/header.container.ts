import {connect} from 'react-redux';
import Header from "./header.component";
import {AppState} from "../../configs/redux.config";
// import {setIsRegistration} from "../../store/registration/registration.action";
// import {IRegistrationParameter} from "../../store/registration/registration.type";
import { selectorsRegistration } from '../../store/registration/registration.selector';
import { Dispatch } from 'redux';
import * as modalAction from '../../store/modal/modal.action';
import { selectorsModal } from '../../store/modal/modal.selector';



const mapStateToProps = (state:AppState) => {
  return{
    // registration: selectorsRegistration.getRegistration(state),
    modalData: selectorsModal.getModal(state),
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    // setIsRegistration: (isRegistered:IRegistrationParameter) => dispatch(setIsRegistration(isRegistered)),
    setModalValue: (data:any) => dispatch(modalAction.setModal(data)),
    changeModalValue: (name:string, value: boolean) => dispatch(modalAction.setChangeValue(name, value)),
  }
}

const HeaderContainer = connect(mapStateToProps,mapStateToDispatch)(Header);
export default HeaderContainer;