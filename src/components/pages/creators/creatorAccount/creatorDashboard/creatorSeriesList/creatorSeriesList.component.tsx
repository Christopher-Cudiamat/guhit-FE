import React, { useEffect, useState } from 'react';
import { getAllSeries } from '../../../../../../services/publish';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { ScrollToTopOnMount } from '../../../../../../utility/scrollToTopOnMount';
import DeleteSeriesModal from '../../../../../globalModals/deleteSeriesModal/deleteSeriesModal';

import { Div } from './creatorSeriesList.style';
import Button from '../../../../../../styleComponents/ui/button.style'; 
import { BsEye } from 'react-icons/bs';



const CreatorSeriesList = (props:any) => {

  const {
    listFilter,
    token,
    onOpenChapters,
    sereiesArrLength,
    changeNavValue,
    setNavValue
  } = props;
 
  const [seriesArray, setSeriesArray] = useState<Array<any>>([]);
  const [idSeries, setIdSeries] = useState('');
  const history = useHistory();

  useEffect(() => { 
    getAllSeries(token)
      .then(res => {
        sereiesArrLength(res.length);
        setSeriesArray(res);
      })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFilter]);

  const handleAddChapter = (seriesId:string) => {
    history.push({
      pathname:"./publish-comic-chapters",
      state:  {seriesId: seriesId, isNewChapter: true, chapterId: "undefined" }
    }); 
  }

  const handleEditSeries = (seriesId:string) => {
    history.push({
      pathname:"./publish-comic-series",
      state:  seriesId 
    }); 
  }
  
  const handleViewSeries = (seriesId:string,userId:string) => {
    setNavValue();
    changeNavValue("comicsLink", true);
    history.push({pathname:"./series",state:{seriesId,userId}});
  }

  return (
    
    <>
      <ScrollToTopOnMount/>
      {
        seriesArray.map((el,index) => 

          <Div seriesCard key={index}> 
            <div>
              <img 
                onClick={() => handleViewSeries(el._id,el.user._id)}
                src={el.seriesCover} 
                alt="Series cover"/>
              <div >
                <BsEye color="white" fontSize="3.4rem"/>
                <p>View series</p>
              </div>
            </div>  
            <div>
              <h2>{el.seriesTitle}</h2>
              <Div genre>
                <p>{el.genrePrimary}</p>
                <p>{el.genreSecondary}</p>
              </Div>
              <p>Date published: {moment(el.createdAt).format('L')}</p>
              <p>chapters: 0</p>
              <Div buttons>
                <Button
                blackOutline
                  onClick={() => handleAddChapter(el._id)}>
                  Add new chapter
                </Button> 
                <Button 
                  blackOutline
                  onClick={() => onOpenChapters(el._id)}>
                    Edit chapters
                </Button >
                <Button 
                  blackOutline 
                  onClick={() => handleEditSeries(el._id)}>
                  Edit Series</Button>
              </Div>
              <Div deleteSeries 
                onClick={() => setIdSeries(el._id)}>
                <DeleteSeriesModal 
                  token={token}
                  id={idSeries}
                  seriesTitle={el.seriesTitle}
                  />
              </Div>
            </div>
          </Div>
                  
               
        )
      }
    </>
   
  );
};

export default CreatorSeriesList;