import React, {useEffect} from 'react';
import {Div } from './thankYouPage.style';
import thankyouImage from '../../../images/thankyou.png'
import { Box } from '../../../styleComponents/ui/box.style';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { setChangeValue } from '../../../store/navigation/navigation.action';


const ThankYouPage = (props:any) => {


const history = useHistory();
const dispatch = useDispatch()

useEffect(() => {

  setTimeout(function(){
    history.push("./");
    dispatch(setChangeValue("homeLink",true));
  }, 1500);

   // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

  


  return (
    <> 
      <Div>
        <img src={thankyouImage} alt="error message" />
        <Box secondaryBig>
          <p>Thank you for joining us!.</p>
        </Box>
      </Div>
    </> 
  );
};

export default ThankYouPage;
