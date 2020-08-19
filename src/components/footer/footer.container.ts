import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import {AppState} from "../../configs/redux.config";
import Footer from "./footer.component";
import { selectorsNavigation } from '../../store/navigation/navigation.selector';
import * as navAction from '../../store/navigation/navigation.action';


const mapStateToProps = (state:AppState) => {
  return{
    navData: selectorsNavigation.getNavigation(state),
  }
}

const mapStateToDispatch = (dispatch: Dispatch) => {
  return {  
    setNavValue: (data:any) => dispatch(navAction.setNavigation(data)),
    changeNavValue: (name:string, value: boolean) => dispatch(navAction.setChangeValue(name, value)),
  }
}

const FooterContainer = connect(mapStateToProps,mapStateToDispatch)(Footer);
export default FooterContainer;
