import React, { useEffect, useState } from 'react';
import { getSeriesComics, postUpdateLikes } from '../../../../services/comics';
import { useLocation} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Overview from './overview/overview.component';
import SeriesChapters from './seriesChapters/seriesChapters.component';

import { Div } from './series.style';
import { TitleSection } from '../../../../styleComponents/ui/title.syle';
import { AiFillLike } from 'react-icons/ai';
import { ScrollToTopOnMount } from '../../../../utility/scrollToTopOnMount';

const Series = (props:any) => {

  const {registration,portalInfo,profile} = props;

  let device: string = portalInfo.deviceType;

  const [overview, setOverview] = useState(device === "desktop" ? true : false);
  const [search, setSearch] = useState(false);
  const [series, setSeries] = useState<any>({});
  const [creator, setCreator] = useState<any>({});
  const [chapters, setChapters] = useState([{}]);
  const [bannerPic,setBannerPic] = useState("");
  const [likes,setLikes] = useState(0);
  const [isLiked,setIsLiked] = useState(false);
  const [update,setUpdate] = useState(true);
  const location = useLocation<any>();
  const state = location.state;
  const history = useHistory();
  const seriesTitle = series.seriesTitle;
  
  const handleCorrectImagePath = (bannerImagePath:any) => {
    const path = bannerImagePath.split("\\");
    const newPath = path[path.length - 1];
    const url = `http://localhost:3000/uploads/series/${newPath}`;
    const urlMobile = `http://192.168.1.11:3000/uploads/series/${newPath}`;
    setBannerPic(device === "desktop" ? url : urlMobile);
  } 

  useEffect(() => {
    getSeriesComics(state.seriesId,state.userId)
    .then(res => {
      setCreator(res.creator);
      setSeries(res.series); 
      setChapters(res.chapters);
      handleCorrectImagePath(res.series.seriesBanner);
      setLikes(res.series.likes.length);
      let likeState = res.series.likes.some(
        (el:{likersUserId:string}) => el.likersUserId === profile.user
      );
      setIsLiked(likeState)
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
    history.push({pathname:"./chapter",state:{chapterId,seriesTitle,chapters}});
  };

  const handleUpdateLikes = (token:string,seriesId:string,seriesUserId:string) => {
    postUpdateLikes(token,seriesId,seriesUserId);
    history.go(0);
  }


  return (
    <div>
      <ScrollToTopOnMount/>
      <Div bannerContainer>
        <Div 
          banner 
          bannerPic={bannerPic}>
            <div></div>
            <TitleSection>{series.seriesTitle}</TitleSection>  
            <div>
              <p>{likes}</p>
              <AiFillLike 
                style={{pointerEvents: isLiked ? "none" : "auto"}}
                color={isLiked ? "#0ACCA9" : "#FFF"}
                onClick={() => 
                  handleUpdateLikes(registration.token,series._id,series.user)
                }/>
            </div>
        </Div>
      </Div>

      <Div container>
        
        <Div overview>
          <Overview 
            series={series}
            creatorPic={creator.profilePic}
            creatorName={creator.displayName}
            handleOverview={handleOverview}
            search={search}
            handleSearchChapter={handleSearchChapter}
            overview={overview}/>
        </Div>
      
        <Div chaptersList>
          <SeriesChapters
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