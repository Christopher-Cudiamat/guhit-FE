import {connect} from 'react-redux';
import Series from "./series.component";
import {AppState} from "../../../../configs/redux.config";
import { selectorsRegistration } from '../../../../store/registration/registration.selector';


const mapStateToProps = (state:AppState) => {
  return{
    registration: selectorsRegistration.getRegistration(state),
  }
}

const  SeriesContainer = connect(mapStateToProps)(Series);

export default SeriesContainer;