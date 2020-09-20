import React, { useEffect, useState } from 'react';
import { getSeriesComics } from '../../../../services/comics';
import { useLocation} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Card from '../../../../styleComponents/ui/card.style';
import { Div, Avatar, Support } from './series.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import {LinkRouter} from '../../../../styleComponents/ui/link.style';
import { 
  Accordion,
  AccordionTitle,
  AccordionDetails,
  AccordionInput,
  AccordionInputControl
} from '../../../../styleComponents/ui/accordion.style';
import { FaSearch } from 'react-icons/fa';
import img from '../../../../images/banners/chapter-1-cover.jpg';



const Series = (props:any) => {

  const [overview, setOverview] = useState(false);
  const [search, setSearch] = useState(false);
  const [series, setSeries] = useState<any>({});
  const [creator, setCreator] = useState<any>({});
  const [chapters, setChapters] = useState([{}]);
  const [bannerPic,setBannerPic] = useState("");
  const location = useLocation<any>();
  const state = location.state;
  const history = useHistory();
  const seriesTitle = series.seriesTitle;
  console.log("BANNER",bannerPic);

  
  const handleCorrectImagePath = (bannerImagePath:any) => {
    const path = bannerImagePath.split("\\");
    const newPath = path[path.length - 1];
    const url = `http://localhost:3000/uploads/series/${newPath}`
    setBannerPic(url);

  } 

  useEffect(() => {
    getSeriesComics(state.seriesId,state.userId)
    .then(res => {
      console.log("RESPONSE",res);
      setSeries(res.series);
      setCreator(res.creator);
      setChapters(res.chapters);
      handleCorrectImagePath(res.series.seriesBanner);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOverview = () => {
    setOverview(!overview);
    setSearch(false);
  };

  const handleSearchChapter = () => {
    setSearch(!search);
    setOverview(false);
  };

  const handleGoToChapter = (chapterId:string,seriesTitle:string) => {
    history.push({pathname:"./chapter",state:{chapterId,seriesTitle}});
  };


  return (
    <div>

      <Div style={{position:"relative",background:"#222222"}}>
        <Div 
        banner 
        bannerPic={bannerPic}>
        </Div>
        <TitleSection>{series.seriesTitle}</TitleSection> 
      </Div>
      <Div container>
        <Div overview>
          <Accordion dark>
            <AccordionTitle 
              onClick={handleOverview}
              show={overview}>
              Overview
            </AccordionTitle>
            <AccordionDetails show={overview}>
              {series.summary}
              <LinkRouter to="./">
                <Avatar src={creator.profilePic} alt="creator avatar" />
                <Support>Support Creator</Support>
              </LinkRouter>
            </AccordionDetails>
          </Accordion>  
          <Accordion dark>
            <AccordionTitle
              onClick={handleSearchChapter}
              show={search}>Search Chapter</AccordionTitle>
            <AccordionInputControl show={search}>
              <FaSearch 
              color={"#fff"}
              size={18} 
              style={{position:"absolute",top: "27%",right: "4%"}}/>
              <AccordionInput placeholder="Type chapter's number..."/>
            </AccordionInputControl>
          </Accordion>
        </Div>
      
        <Div chaptersList>
            <Div titleContainer>
              <TitleSection>Chapters</TitleSection>
              <p>{chapters.length} results</p>
            </Div>
            <Card containerCenter>
              { 
                chapters.length > 0 ?
                chapters.map((el:any,index:number) => 
                  <Card
                    onClick={() => handleGoToChapter(el._id,seriesTitle)}
                    chapters 
                    horizontalSquare 
                    key={index}>
                    <img src={el.chapterCover} alt="featured comics"/>
                    <div>
                      <p>{el.chapterTitle}</p>
                      <p>{el.createdAt}</p>
                      <p>#{index}</p>
                    </div>
                  </Card>)
                :
                <Div noResult>
                  <h3>No chapters created</h3>
                </Div>
              }
            </Card>
        </Div>
      </Div>
    </div>
  );
};

export default Series;