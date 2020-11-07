import React from 'react';
import { useHistory } from 'react-router-dom';

const GlobalSearchListMobile = (props:any) => {

  let {searchedListArr, setNavValue, changeNavValue, setModalValue} = props;

  const history = useHistory();
  console.log("TEST",searchedListArr);

  const handleGoToSeries = (seriesId:string,userId:string) => {
    setNavValue();
    setModalValue();
    changeNavValue("comicsLink", true);
    history.push({pathname:"./series",state:{seriesId,userId}});
    console.log("seriesId",seriesId,"userId",userId)
  } 

  return (
    <div style={{ 
      // padding: "20px",
      width: "100vw",
      background:"#eee"
    }}>

      {
        searchedListArr.map((el:any,index:number) => 
          <div 
            key={index}
            onClick={() => handleGoToSeries(el._id,el.user)} 
            style={{display:"flex", alignItems:'center',padding:"20px"}}>
            <img src={el.seriesCover} alt="series cover" style={{height:"10vh", width:"auto"}}/>
            <p style={{fontSize:"24px",marginLeft: "15px"}}>{el.seriesTitle}</p>
          </div>
        )
      }
    </div>
  );
};

export default GlobalSearchListMobile;