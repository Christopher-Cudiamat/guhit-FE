import React from 'react';
import store from '../../configs/store.config';
import loaderGif from '../../images/loader/loader.gif';
import { LoaderGif } from './loader.style';

const Loader = () => {

  let loader = store.getState().loader.isLoading;


  return (
    <>
      { loader ?
          <>
            <LoaderGif 
              src={loaderGif}
              alt="loader gif"/> 
          </>
        : null
      }

    </>
  );
};

export default Loader;