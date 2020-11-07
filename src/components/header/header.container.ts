import {connect} from 'react-redux';
import Header from "./header.component";
import {AppState} from "../../configs/redux.config";
import { selectorsNavigation } from '../../store/navigation/navigation.selector';

const mapStateToProps = (state:AppState) => {
  return{
    navData: selectorsNavigation.getNavigation(state),
  }
}

const HeaderContainer = connect(mapStateToProps)(Header);
export default HeaderContainer;