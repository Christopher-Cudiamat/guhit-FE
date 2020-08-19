import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./styleComponents/themeGlobal"
import Header from "./components/header/header.container";
import Footer from './components/footer/footer.container';
import Pages from './components/pages/pages.container';
import Loader from './components/loader/loader.container';
import {  BrowserRouter as Router } from 'react-router-dom';
import { Overlay } from './styleComponents/ui/overlay.style';
import store from './configs/store.config';




const App = () => {
  
  let loader = store.getState().loader.isLoading;

  return (

    <ThemeProvider theme={theme}>
      <div style={{position:"relative"}}>

        {loader ? <Overlay light/> : null }

        <Router>
          <Loader/> 
          <Header/> 
          <Pages />
          <Footer/>
        </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
