import React from 'react';
import store from '../../configs/store.config';
import loaderGif from '../../images/loader/loader.gif';


const Loader = (props:any) => {

  let loader = store.getState().loader.isLoading;


  return (
    <>
      { loader ?
          <>
          <img 
            src={loaderGif}
            alt="loader"
            style={{
            width: "8rem",
            height: "8rem",
            position: "absolute",
            zIndex: 9999,  
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"}}/> 
          </>
          
       
        : null
      }

    </>
  );
};

export default Loader;