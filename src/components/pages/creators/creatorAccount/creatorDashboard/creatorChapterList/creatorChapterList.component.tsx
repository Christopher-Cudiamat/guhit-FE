import React, { useEffect, useState } from 'react';
import { getAllChapters } from '../../../../../../services/publish';
import { useHistory } from 'react-router-dom';

import { Div } from './creatorChapterList.style';
import Button from '../../../../../../styleComponents/ui/button.style';
import { ScrollToTopOnMount } from '../../../../../../utility/scrollToTopOnMount';
import DeleteChapterModal from '../../../../../globalModals/deleteChapterModal/deleteChapterModal.component';

// import chapterSample from "../../../../../../images/chapter-3.jpg";

const CreatorChapterList = (props:any) => {

  const {token,seriesId,chapterId} = props;

  const [chaptersArray, setChaptersArray] = useState<Array<any>>([]);
  const [idChapter, setIdChapter] = useState('');

  console.log("ID CHAPTER", idChapter);

  useEffect(() => {
    getAllChapters(token,seriesId)
      .then(res => {
        setChaptersArray(res);
      }) 
   
  }, []);

  const history = useHistory();


  const handleEditChapter = (chapterId:string,seriesId:string) => {
    console.log("CHAPTER_ID",chapterId);
    history.push({
      pathname:"./publish-comic-chapters",
      state: {seriesId:seriesId, chapterId:chapterId, isNewChapter: false }
    }); 
  }

  return (
    <React.Fragment>
       <ScrollToTopOnMount/>
      {
        chaptersArray.map((el,index) => {
          return <Div chapterCard key={index}> 
                  <img src={el.chapterCover} alt="Series cover"/>
                  <div>
                    <h2>{el.chapterTitle}</h2>
                    <p>Date created: {el.chapterDateCreated}</p>
                    <p>chapter: {el.chapterNumber} </p>
                    <Div buttons>
                      <Button 
                        onClick={e => handleEditChapter(el._id,el.seriesId)}
                        blackOutline>
                        Edit pages
                      </Button >
                      <Button 
                        blackOutline> 
                        View Chapters
                      </Button >
                    </Div>
                  </div>
                  <Div deleteChapter
                    onClick={(e:any) => setIdChapter(el._id)}>
                    <DeleteChapterModal 
                      token={token}
                      id={idChapter}
                      />
                  </Div>
                </Div>
        })
      }
    </React.Fragment>

  );
};

export default CreatorChapterList;