import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import store from '../../configs/store.config';




const PrivateRoute = (props:any) => {
  let{component: Component, ...rest} = props;
  let isAuthenticated = store.getState().registration.isAuthenticated;
  console.log("PRIVATEROUTE IS AUTH",isAuthenticated);

  return<Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) 
      : 
      (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )
    }
  />
};

export default PrivateRoute;