import React, { useEffect,useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getChapterComics } from '../../../../services/comics';
import ChapterHeaderNav from './chapterHeaderNav/chapterHeaderNav.component';
// import Comment from "../../comment/comment.component"; to be used later

import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import { AiFillLike } from 'react-icons/ai';
import { FaShareAlt } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import {Div, Container} from './chapter.style';

// import Card from '../../../../styleComponents/ui/card.style'; to be used later







interface Ilocation {
  chapterId: string,
  seriesTitle: string,
  chapters: any,// put the right type in the future
}


const Chapter = (props:any) => {

  const location = useLocation<Ilocation>();
  const state = location.state;
  const history = useHistory();
  const [data,setData] = useState<any>({});
  const [pages,setPages] = useState<any>([]);
  const [chapterId,setChapterId] = useState(state.chapterId);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  useEffect(() => {
    getChapterComics(chapterId)
    .then(res => {
      setData(res);
      setPages(res.chapterPages)
    });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterId]);

  const handleGoBackToSeries = (seriesId:string,userId:string) => {
    history.push({pathname:"./series",state:{seriesId,userId}});
  } 

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <Container>


      <Div chapterTitle>
        <Div titles>
          <TitleSection>{data.chapterTitle}</TitleSection>
          <h4 onClick={() => handleGoBackToSeries(data.seriesId,data.user)}>
            {state.seriesTitle}
          </h4>
        </Div>
        <Div bookmark>
          <FaBookmark fontSize={"3.4rem"} color={"#F0B110"}/>
        </Div>
      </Div>

      <ChapterHeaderNav 
        chapterList={state.chapters}
        chapterId={chapterId}
        setChapterId={setChapterId}/>

       <Div chapterPages>
        { 
          pages.map((page:any, index:number) => 
            <div key={index}>
              <img src={page} alt="chapter pages"/>
            </div>
          ) 
        }
      </Div> 
      
      { 
        offset > 500 ?
        <>
          <Div chapterNav>
            <div>
              <AiFillLike fontSize={"2.5rem"} color={"#08E5BE"}/>
              <FaShareAlt fontSize={"2.5rem"} color={"#08E5BE"}/>
              <FaCommentDots fontSize={"2.5rem"} color={"#08E5BE"}/>
            </div>
          </Div>

          <ChapterHeaderNav 
            chapterList={state.chapters}
            chapterId={chapterId}
            setChapterId={setChapterId}/>
          
          <Div top onClick={handleScrollToTop}>
            <FaArrowAltCircleUp/> 
          </Div>
        
        
        </> 
        : null
      }

      {/*    TO BE DEVELOPED IN THE FUTURE 
      <Div chapterComments>
        <TitleSection>Comments:</TitleSection>
        <Comment/>
      </Div> */}

    </Container>
  );
};

export default Chapter;