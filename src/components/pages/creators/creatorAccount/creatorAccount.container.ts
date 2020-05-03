import {connect} from 'react-redux';
import CreatorAccount from "./creatorAccount.component";
import {AppState} from "../../../../configs/redux.config";

import { Dispatch } from 'redux';


const mapStateToProps = (state:AppState) => {
  return{
  
  }
}


const mapStateToDispatch = (dispatch: Dispatch) => {
  return {
   
  }
}

const CreatorAccountContainer = connect(mapStateToProps,mapStateToDispatch)(CreatorAccount);
export default CreatorAccountContainer;