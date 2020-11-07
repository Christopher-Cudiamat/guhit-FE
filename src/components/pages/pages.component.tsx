import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Creators from './creators/creators.component';
import CreatorPage from './creators/creatorPage/creatorPage.container';
import Novels from './novels/novels.component';
import ErrorPage from './errorPage/errorPage.component';
import ThankYouPage from './thankYouPage/thankYouPage.component';
import About from './about/about.component';
import Contacts from './contacts/contacts.component';
import Events from './events/events.component';
import Series from './comics/series/series.container';
import Chapter from './comics/chapter/chapter.component';
import { Div } from './pages.style';
import PasswordRecovery from './login/passwordRecovery/passwordRecovery.component';

// import PublishNovels from './publish/publishComicsChapter/publishComicsChapter.component';

import Home from './home/home.container';
import Login from './login/login.container';
import SignUp from './signUp/signUp.container';
import Comics from './comics/comics.container';
import { Overlay } from '../../styleComponents/ui/overlay.style';
import CreatorAccount from './creators/creatorAccount/creatorAccount.container';
import Publish from './publish/publish.container';
import PublishCreatorInfo from './publish/publishCreatorInfo/publishCreatorInfo.container';
import PublishComicsSeries from './publish/publishComicsSeries/publishComicsSeries.container';
import PublishComicsChapter from './publish/publishComicsChapter/publishComicsChapter.container';
import PrivateRoute from './privateRoute';
import VerifyToken from './signUp/verifyToken/verifyToken.container';



const Pages = (props:any) => {
 
  let {modalData,setModalValue,loader} = props;
  
  const handleCloseOverlay =  () => {
    setModalValue();
  };

  return (
    
    <Div onClick={handleCloseOverlay}>
      
      {
        modalData.drawerModal || modalData.searchModal || modalData.notifModal  || modalData.libraryModal || modalData.accountModal 
        ? <Overlay onClick={handleCloseOverlay} zIndex={"99"}/> 
        : loader.isLoading
        ?  <Overlay light/> 
        : null 
      }

        <Switch>
          
          <Route exact path="/home">
            <Home/>
          </Route>
         
          <Route exact path="/comics">
            <Comics />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
          <Route exact path="/chapter">
            <Chapter />
          </Route>
          <Route exact path="/novels">
            <Novels />
          </Route> 
          {/* <Route exact path="/publish-comic-chapters">
            <PublishComicsChapter />
          </Route>
          <Route exact path="/publish-comic-series">
            <PublishComicsSeries />
          </Route> */}
          {/* <Route exact path="/publish-creator-info">
            <PublishCreatorInfo />
          </Route> */}
    
          <Route exact path="/publish">
            <Publish />
          </Route>
          <Route exact path="/creators">
            <Creators />
          </Route>
          {/* <Route exact path="/:id/creator" >
            <CreatorPage />
          </Route> */}
          <Route exact path="/creator" >
            <CreatorPage />
          </Route>
          {/* <Route exact path="/creator-account">
            <CreatorAccount />
          </Route> */}
          <Route exact path="/password-recovery">
            <PasswordRecovery/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/email-verification-code">
            <VerifyToken/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/thankyoupage">
            <ThankYouPage />
          </Route>
          <PrivateRoute
            path="/publish-creator-info"
            component={PublishCreatorInfo}
          />;
           <PrivateRoute
            path="/publish-comic-series"
            component={PublishComicsSeries}
          />;
          <PrivateRoute
            path="/publish-comic-chapters"
            component={PublishComicsChapter}
          />;
          <PrivateRoute
            path="/account"
            component={CreatorAccount}
          />;

          <Route path="/">
            <Redirect to="/home" />
          </Route>
           
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
    
    </Div>

  );
};

export default Pages;