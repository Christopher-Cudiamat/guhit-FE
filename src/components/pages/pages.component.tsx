import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Creators from './creators/creators.component';
import Novels from './novels/novels.component';
import ErrorPage from './errorPage/errorPage.component';
import ThankYouPage from './thankYouPage/thankYouPage.component';
import About from './about/about.component';
import Contacts from './contacts/contacts.component';
import Events from './events/events.component';
import Chapters from './comics/chapters/chapters.component';
import Chapter from './comics/chapters/chapter/chapter.component';
import { Div } from './pages.style';

// import PublishNovels from './publish/publishComicsChapter/publishComicsChapter.component';

import Home from './home/home.container';
import Login from './login/login.container';
import SignUp from './signUp/signUp.container';
import Comics from './comics/comics.container';
import { Overlay } from '../../styleComponents/ui/overlay.style';
import Loader from '../loader/loader.component';
import CreatorAccount from './creators/creatorAccount/creatorAccount.container';
import Publish from './publish/publish.container';
import PublishCreatorInfo from './publish/publishCreatorInfo/publishCreatorInfo.container';
import PublishComicsSeries from './publish/publishComicsSeries/publishComicsSeries.container';
import PublishComicsChapter from './publish/publishComicsChapter/publishComicsChapter.container';



const Pages = (props:any) => {

  let {modalData, setModalValue,loader} = props;

  const handleCloseOverlay =  () => {
    setModalValue();
  };

  return (
    
    <Div onClick={handleCloseOverlay}>
      {
        modalData.data.drawerModal || modalData.data.searchModal || modalData.data.notifModal  || modalData.data.libraryModal || modalData.data.accountModal 
        ? <Overlay onClick={handleCloseOverlay}/> 
        : loader.isLoading
        ?  <Overlay light/> 
        : null 
      }

        <Loader/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/comics">
            <Comics />
          </Route>
          <Route exact path="/chapters">
            <Chapters />
          </Route>
          <Route exact path="/chapter">
            <Chapter />
          </Route>
          <Route exact path="/novels">
            <Novels />
          </Route> 
          <Route exact path="/publish-comic-chapters">
            <PublishComicsChapter />
          </Route>
          <Route exact path="/publish-comic-series">
            <PublishComicsSeries />
          </Route>
          <Route exact path="/publish-creator-info">
            <PublishCreatorInfo />
          </Route>
          <Route exact path="/publish">
            <Publish />
          </Route>
          <Route exact path="/creators">
            <Creators />
          </Route>
          <Route exact path="/creator-account">
            <CreatorAccount />
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp />
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
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
    
    </Div>

  );
};

export default Pages;