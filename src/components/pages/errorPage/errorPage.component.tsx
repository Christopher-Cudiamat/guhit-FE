import React from 'react';
import {Div } from './errorPage.style';
import errorImage from '../../../images/chibi-crying.png'
import { Box } from '../../../styleComponents/ui/box.style';




const ErrorPage = (props:any) => {


  
// const handleRedirect = () => {
//   setTimeout(function(){
//     window.location.reload()
//   }, 5000);

// }


  return (
    <> 
      <Div>
        <img src={errorImage} alt="error message" />
        <Box errorBig>
          <p>Sorry something went wrong.</p>
        </Box>
      </Div>
    </> 
  ); 
};

export default ErrorPage;
