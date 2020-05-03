import {connect} from 'react-redux';
import Pages from "./pages.component";
import {AppState} from "../../configs/redux.config";
import { Dispatch } from 'redux';
import { selectorsNavigation } from '../../store/navigation/navigation.selector';
import * as navAction from '../../store/navigation/navigation.action';
import * as modalAction from '../../store/modal/modal.action';
import { selectorsModal } from '../../store/modal/modal.selector';
import { selectorsIsLoading } from '../../store/loader/loader.selector';



const mapStateToProps = (state:AppState) => {
  return{
    navData: selectorsNavigation.getNavigation(state),
    modalData: selectorsModal.getModal(state),
    loader: selectorsIsLoading.getIsLoading(state)
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
    setNavValue: (data:any) => dispatch(navAction.setNavigation(data)),
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
    setModalValue: (data:any) => dispatch(modalAction.setModal(data)),
    changeModalValue: (name:string, value: boolean) => dispatch(modalAction.setChangeValue(name, value)),
  
  }
}

const PagesContainer = connect(mapStateToProps,mapStateToDispatch)(Pages);
export default PagesContainer;