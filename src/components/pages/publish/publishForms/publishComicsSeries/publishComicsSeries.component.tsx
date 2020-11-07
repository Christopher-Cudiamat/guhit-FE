import React, { useState, useRef, useEffect } from 'react';
import { Container, Div, Form, P, GenreLabel } from './publishComicsSeries.style';
import { useHistory,useLocation } from 'react-router-dom';
import { Input, InputField, Label } from '../../../../../styleComponents/ui/input.style';
import { Select } from '../../../../../styleComponents/ui/select.style';
import { TextArea } from '../../../../../styleComponents/ui/textarea.style';
import { CheckBox } from '../../../../../styleComponents/ui/checkBox.style';
import { formatTags } from '../../../../../utility/formatTags';
import Button from '../../../../../styleComponents/ui/button.style';
import PublishHeader from '../../publishForms/publishHeader/publishHeader.container';
import {postCreateSeries, getSeries } from '../../../../../services/publish';
import { ScrollToTopOnMount } from '../../../../../utility/scrollToTopOnMount';
import { 
  UploaderField, 
  UploaderLabel,
  UploaderBannerContainer,
  UploaderBanner,
  UploaderCoverContainer, 
  UploaderCover } from '../../../../../styleComponents/ui/upload';
import uploadChap from '../../../../../images/upload.png';
import { formatToDataUrl, formatToImageFile } from '../../../../../utility/formatImage';



const PublishComicsSeries = (props:any) => {

  const {registration} = props;

  interface IImageUploadType {
    name?: string,
    lastModified?: number,
    lastModifiedDate?:Date,
    webkitRelativePath?: string,
    size?: number,
    type?: string,
  }

  const history = useHistory();  
  const location = useLocation();
  const isNewSeries = location.state; 
  console.log("isNewSeries",isNewSeries)
  console.log("typeof",typeof isNewSeries)
  
  const [isDisabled,  setIsDisabled] = useState<boolean>(false);
  const [coverPic, setCoverPic] = useState<IImageUploadType[]|string>([]);
  const [bannerPic, setBannerPic] = useState<IImageUploadType[]|string>([]);
  const [title, setTitle] = useState<string>("");
  const urlLink = `https://guhit.com/series/${title.replace(/ /g,"-")}`;
  const [url, setUrl] = useState<string>(urlLink);
  const [genrePrimary, setGenrePrimary] = useState<string>("");
  const [genreSecondary, setGenreSecondary] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  // const [seriesId, setSeriesId] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInputDef, setTagInputDef] = useState<string>("");
  // const [email, setEmail] = useState<string>("test_user@yopmail.com");
  const [agreedPolicy, setAgreedPolicy] = useState<boolean>(false);
  const [containExplicit, setContainExplicit] = useState<boolean>(false);
  const [seriesData, setSeriesData] = useState({});

  const [prevCover, setprevCover] = useState<string>("");
  const [toggleCoverSize, setToggleCoverSize] = useState<boolean>(false);
  
  const [prevBanner, setprevBanner] = useState<string>("");
  const [toggleBannerSize, setToggleBannerSize] = useState<boolean>(false);


  
  useEffect(() => {
    //If updating existing series
    if(isNewSeries !== null) {
      getSeries(registration.token,isNewSeries)
      .then((res: any) => {
        console.log("RESPONSE",res)
        formatToDataUrl(res.seriesCover, function(myBase64:string) {
          setprevCover(myBase64);
          setToggleCoverSize(true);
        });
        formatToDataUrl(res.seriesBanner, function(myBase64:string) {
          setprevBanner(myBase64);
          setToggleBannerSize(true);
        });
        formatToImageFile(res.seriesCover, function(pic:any) {
          setCoverPic(pic);
        });
        formatToImageFile(res.seriesBanner, function(pic:any) {
          setBannerPic(pic);
        });
        setTitle(res.seriesTitle);
        setUrl(res.seriesUrl);
        setSummary(res.summary)
        setGenrePrimary(res.genrePrimary);
        setGenreSecondary(res.genreSecondary);
        setTags(res.tags);
        setAgreedPolicy(res.condition);
        setContainExplicit(res.consent)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("SERIES DATA",seriesData);

  useEffect(() => {
    setSeriesData({
      coverPic,
      bannerPic,
      title,
      url,
      genrePrimary,
      genreSecondary,
      summary,
      tags,
      agreedPolicy,
      containExplicit,
      isNewSeries
    })
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverPic,title,url,genrePrimary,genreSecondary,summary,tags,
    bannerPic,agreedPolicy,containExplicit]);

  useEffect(() => {
    if(genrePrimary === ""){
      setGenreSecondary("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genrePrimary]);
  
  useEffect(() => {
    if(genrePrimary === ""){
      setGenreSecondary("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genrePrimary]);

  useEffect(() => {
    setUrl(urlLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  useEffect(() => {
    setTagInputDef("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  let genreList = [
    "","Comedy","Action","Adventure","Fantasy","Horror","Romance","Mystery","Sports","Sci-fi","Drama","Mature"
  ] 

  const inputEl = useRef<HTMLInputElement>(null)
 
  const handleCover = (picture:any) => {
    // setCoverPic([...coverPic,picture]);
    setCoverPic(picture);
  }  

  const handleBanner = (picture:any) => {
    setBannerPic(picture);
  }

  const handleSendForm = (event:any) => {
    event.preventDefault(); 
    postCreateSeries(registration.token,seriesData)
      .then(res => {
     
        if(isNewSeries === "isNewSeries"){
          history.push({
            pathname:"./publish-comic-chapters",
            state:  {seriesId: res._id, isNewChapter: true }
          }); 
        } else {
          history.push("./creator-account");  
        }
    })
  }

  const handleTags = (event:any) => {
    event.preventDefault();
    if(tags.length >= 2) {
      setIsDisabled(true);
    }
    if(inputEl && inputEl.current) {
      inputEl.current.focus();
      if(inputEl.current.value.length > 1){
        setTags([...tags,`#${ inputEl.current.value.replace(/\s/g, '')}`]);
      } else {
        setTags([]);
      }
    }
    // strict null checks need us to check if inputEl and current exist.
    // but once current exists, it is of type HTMLInputElement, thus it
    // has the method focus! ✅ 
  };

  const handleValidateUpload = (e:any) => {
    if(e[0].type == "image/png" ||
    e[0].type == "image/jpg" ||
    e[0].type == "image/jpeg"){
      return true;
    }
  };

  const handleUpload = (e:any, name: string) => {
    let files:any = e;
      if(files.length === 1 && handleValidateUpload(e)) {
        if (e[0].size <= 2000000){
          let file = e[0];
          let reader = new FileReader();
          reader.onload = function(e: any) {
            if(name === "cover"){
              setprevCover(e.target.result);
              setToggleCoverSize(true);
              handleCover(file);
            } else if (name === "banner"){
              setprevBanner(e.target.result);
              setToggleBannerSize(true);
              handleBanner(file);
            }
          };
          reader.readAsDataURL(file);
        }else {
          e.target.value = "";
          alert("Exceed maximum")
        };
        // handleUpload(e);
      } else {
        e.target.value = "";
        alert("Please insert correct image type only")
      };

  };


  
  return (
    <Container>
      
      <ScrollToTopOnMount/>

      <PublishHeader
        activeCreators={false}
        activeSeries={true}
        activeChapter={false}
        title={isNewSeries === "isNewSeries" ? "Create New Series":"Edit Series"}
        message={"Publish a new series in just a minute! but first let us give you some tips"}
      />

      <Div formContainer>
              
        <UploaderCoverContainer>
          <UploaderCover
            cover
            coverFull={toggleCoverSize} 
            prevCover={prevCover||uploadChap}>
            <UploaderField
              thumbnail
              type="file"
              onChange={e => handleUpload(e.target.files, "cover")}/>
            </UploaderCover>
            <UploaderLabel thumbnail>Upload Series Cover<span>(960 x 1440px)</span></UploaderLabel>
        </UploaderCoverContainer>

        <Form>
          <Input>
            <Label fixed>Title</Label> 
            <InputField 
              defaultValue={title}
              marginTop
              onChange={(e:any) => setTitle(e.target.value)}/>
          </Input>

          <Input>
            <Label fixed>Url</Label>
            <InputField
              marginTop
              type="text"
              value={`https://guhit.com/series/${title.replace(/ /g,"-")}`} 
              // onChange={(e:any) => setUrl(`www.sisal.com/series/${e.target.value.replace(/ /g,"_")}`)}
              />
          </Input>

          <Div genreContainer>
            {isNewSeries !== "isNewSeries" ? <GenreLabel>Genres</GenreLabel> : null}
            <Select 
            medium 
            onChange={e => setGenrePrimary(e.target.value)}>
              {
                genreList.map((el,index) => {
                  if(index === 0 && isNewSeries === "isNewSeries" ){
                    return <option key={index} value="">Genre 1</option> 
                  } else if(index === 0 && isNewSeries !== "isNewSeries" ){
                    return <option key={index} value={genrePrimary}>{genrePrimary}</option> 
                  }else if(el === genreSecondary) {
                    return <option key={index} disabled={true} value={el}>{el}</option> 
                  } else {
                    return <option key={index} value={el}>{el}</option> 
                  } 
                })
              }
              
            </Select>
            <Select medium disabled={genrePrimary === ""}  onChange={e => setGenreSecondary(e.target.value)}>
              {
                genreList.map((el,index) => {
                  if(index === 0 && isNewSeries === "isNewSeries" ){
                    return <option key={index} value="">Genre 2 (Optional)</option> 
                  } else if(index === 0 && isNewSeries !== "isNewSeries" ){
                    return <option key={index} value={genreSecondary}>{genreSecondary}</option> 
                  } else if (genrePrimary === ""){
                    return <option key={index} selected={true} value="">Genre 2 (Optional)</option> 
                  } else if(el === genrePrimary) {
                    return <option key={index} disabled={true} value={el}>{el}</option> 
                  } else {
                    return <option key={index} value={el}>{el}</option> 
                  }                           
                })         
              }
            </Select>
          </Div>

          <Input>
              <Label fixed>Summary</Label>
              <TextArea 
                defaultValue={summary}
                marginTop
                maxLength={500}
                onBlur={(e:any) => setSummary(e.target.value)}
                placeholder="Less than 500 characters"/>
          </Input>

          <Input style={{marginBottom:"0rem"}}>
              <Label fixed>Tags (Optional)</Label>
              <Div inputTagContainer style={{marginBottom:"0rem"}}>
                <P hash>#</P>
                <InputField
                  marginTop 
                  style={{paddingLeft: "3rem",marginBottom: "1rem"}}
                  disabled={isDisabled}
                  type="text" 
                  ref={inputEl} 
                  onChange={e => setTagInputDef(e.target.value)}
                  value={tagInputDef}
                  onKeyDown={formatTags}/>
                <Button 
                  width={"20rem"}
                  height={"4.8rem"}
                  style={{marginTop:"10px",marginLeft:"10px"}}
                  secondary 
                  onClick={handleTags} 
                  disabled={isDisabled}>
                  Add tags
                </Button>
              </Div>
          </Input>
          <div style={{display: "flex", color: "#08E5BE",marginLeft:".5rem",fontSize: "1.2rem"}}>
            <p style={{color: "#ccc"}}>Max of 3 Tags:</p>
            {tags.map((el,index) => {
              return <p style={{marginLeft: "1rem"}} key={index}>{el}</p>
              })
            }
          </div>
          
          <UploaderBannerContainer>
            <UploaderBanner 
              thumbnail
              bannerFull={toggleBannerSize} 
              prevBanner={prevBanner||uploadChap}>
              <UploaderField
                banner
                disabled={bannerPic.length > 1}
                type="file"
                onChange={e => handleUpload(e.target.files, "banner")}/>
            </UploaderBanner>
            <UploaderLabel banner>Upload chapter banner <span>(Optional) 1280 x 460px</span></UploaderLabel>
          </UploaderBannerContainer>

          <Div checkContainer>
            <Div consentContainer>
              <div>
                <CheckBox checked={agreedPolicy} onChange={e => setAgreedPolicy(!agreedPolicy)}/>
              </div>
              <p>
                AGREED POLICY has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum SOME EDIT.
              </p>
            </Div>
            <Div consentContainer>
              <div>
                <CheckBox checked={containExplicit} onChange={e => setContainExplicit(!containExplicit)}/>
              </div>
              <p>
                CONTAINE EXPLICIT has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
              </p>
            </Div>
          </Div>

          <Div buttonContainer>
            <Button 
              width={"30rem"}
              height={"5.5rem"}
              secondary 
              onClick={handleSendForm}>
                  {isNewSeries === "isNewSeries" ? "Create new series" : "Update series"}
            </Button>
          </Div>
       
        </Form>
      </Div>
  
    </Container>

  );
};

export default PublishComicsSeries;