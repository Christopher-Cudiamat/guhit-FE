import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import store from "./configs/store.config"
import { UAParser } from 'ua-parser-js';
import { setPortalInfo } from './store/portalInfo/portalInfo.action';

let ua =  navigator.userAgent;

store.dispatch(setPortalInfo('browserType',(new UAParser(ua).getBrowser().name||"")));
store.dispatch(setPortalInfo('deviceType',(new UAParser(ua).getDevice().type||"")));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
