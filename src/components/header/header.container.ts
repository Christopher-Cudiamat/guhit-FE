import {connect} from 'react-redux';
import Header from "./header.component";
import {AppState} from "../../configs/redux.config";
import { Dispatch } from 'redux';
import * as modalAction from '../../store/modal/modal.action';
import { selectorsModal } from '../../store/modal/modal.selector';
import { selectorsNavigation } from '../../store/navigation/navigation.selector';


const mapStateToProps = (state:AppState) => {
  return{
    modalData: selectorsModal.getModal(state),
    navData: selectorsNavigation.getNavigation(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setModalValue: (data:any) => dispatch(modalAction.setModal(data)),
    changeModalValue: (name:string, value: boolean) => dispatch(modalAction.setChangeValue(name, value)),
  }
}

const HeaderContainer = connect(mapStateToProps,mapStateToDispatch)(Header);
export default HeaderContainer;