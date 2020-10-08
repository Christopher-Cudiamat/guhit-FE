import React, { useEffect, useState } from 'react';
import { getSeriesComics, postUpdateLikes } from '../../../../services/comics';
import { useLocation} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Overview from './overview/overview.component';


import { Div} from './series.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';

import img from '../../../../images/banners/chapter-1-cover.jpg';
import ChapterList from './chapterList/chapterList.component';




const Series = (props:any) => {

  const {registration} = props;

  const [overview, setOverview] = useState(false);
  const [search, setSearch] = useState(false);
  const [series, setSeries] = useState<any>({});
  const [creator, setCreator] = useState<any>({});
  const [chapters, setChapters] = useState([{}]);
  const [bannerPic,setBannerPic] = useState("");
  const [likes,setLikes] = useState(0);
  const [update,setUpdate] = useState(true);
  const location = useLocation<any>();
  const state = location.state;
  const history = useHistory();
  const seriesTitle = series.seriesTitle;
  console.log("BANNER",likes);

  
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
      setLikes(res.series.likes.length);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

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

  const handleUpdateLikes = (token:string,seriesId:string,seriesUserId:string) => {
    postUpdateLikes(token,seriesId,seriesUserId);
    history.go(0);
  }


  return (
    <div>

      <Div style={{position:"relative",background:"#222222"}}>
        <Div 
          banner 
          bannerPic={bannerPic}>
        </Div>
        <TitleSection>{series.seriesTitle}</TitleSection>  
        {/* <TitleSection>{likes}</TitleSection>  */}
      </Div>
      <Div container>
        
        <Div overview>
          <Overview 
            series={series}
            creator={creator}
            handleOverview={handleOverview}
            search={search}
            handleSearchChapter={handleSearchChapter}
            overview={overview}/>
        </Div>
      
        <Div chaptersList>
          <ChapterList
            series={series}
            chapters={chapters}
            handleGoToChapter={handleGoToChapter}
            registration={registration}
            handleUpdateLikes={handleUpdateLikes}
            seriesTitle={seriesTitle}/>
        </Div>
      </Div>
    </div>
  );
};

export default Series;