import React, { useState, useRef, useEffect } from 'react';
import { Container, Div, Form, P } from './publishComicsChapter.style';
import { useHistory } from 'react-router-dom';

import { Input, InputField, Label } from '../../../../styleComponents/ui/input.style';
import { TextArea } from '../../../../styleComponents/ui/textarea.style';
import { formatTags } from '../../../../utility/formatTags';
import Button from '../../../../styleComponents/ui/button.style';
import PublishHeader from '../publishHeader/publishHeader.container';
import { Table } from '../../../../styleComponents/ui/table.style';

import {MdDeleteForever} from 'react-icons/md';
import {IoMdArrowRoundUp} from 'react-icons/io';
import {IoMdArrowRoundDown} from 'react-icons/io';
import uploadChap from '../../../../images/upload.png';
import {UploaderField, UploaderLabel, UploaderImg, UploaderThumb, UploaderChapter, UploaderBanner, UploaderBannerContainer, UploaderThumbContainer } from '../../../../styleComponents/ui/upload';
import { CheckBox } from '../../../../styleComponents/ui/checkBox.style';
import { ScrollToTopOnMount } from '../../../../utility/scrollToTopOnMount';
import { postPublishChapter } from '../../../../services/publish';


const PublishComicsChapter = (props:any) => {

  interface IImageUploadType {
    name?: string,
    lastModified?: number
    lastModifiedDate?:Date
    webkitRelativePath?: string,
    size?: number,
    type?: string,
  }

  const history = useHistory();
  const inputEl = useRef<HTMLInputElement>(null)
  
  const [isDisabled,  setIsDisabled] = useState<boolean>(false);
  const [chapterCover, setChapterCover] = useState<IImageUploadType[]>([]);
  const [chapterTitle, setChapterTitle] = useState<string>("");
  const [chapterDescription, setChapterDescription] = useState<string>("");
  // const [bannerPic, setBannerPic] = useState<IImageUploadType[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInputDef, setTagInputDef] = useState<string>("");
  const [openComments, setOpenComments] = useState<boolean>(false); 
  const [matureContents, setMatureContents] = useState<boolean>(false); 
  const [chaptersData, setChaptersData] = useState({}); 
  const [chapterPages, setChapterPages] = useState<IImageUploadType[]>([]);
  const [prevThumbnail, setprevThumbnail] = useState<string>("");
  const [toggleThumbSize, setToggleThumbSize] = useState<boolean>(false);

  
  // const [prevBanner, setprevBanner] = useState<string>("");
  // const [toggleBannerSize, setToggleBannerSize] = useState<boolean>(false);

   
  useEffect(() => {
    setChaptersData({
      chapterCover,
      chapterTitle,
      chapterDescription,
      tags,
      openComments,
      matureContents,
      // bannerPic,
      chapterPages,
      date: new Date(),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterCover,chapterTitle,chapterPages,chapterDescription,tags,
    ,openComments,matureContents]);

    console.log("chapterPages",chapterPages);

  useEffect(() => {
    setTagInputDef("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  useEffect(() => {
    setChapterPages(chapterPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterPages]);



  //chapter uploads table work in progress
  const handleChangePosition = (name:string,arr:any, old_index:any, new_index:any) => {
    if(name === "up"){
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      setChapterPages(arr);
    } else {
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      setChapterPages(arr);
    }
  };

  const handleDeleteChapter = (indexClicked:number) => {
    const newChapter = chapterPages.filter((el,index) => index !== indexClicked);
    setChapterPages(newChapter);
  };
  
  const handleChapterCover = (event:any) => {
    setChapterCover(event);
  };

  // const handleBanner = (event:any) => {
  //   setBannerPic(event);
  // };

  const handleSendForm = (event:any) => {
    event.preventDefault();
    postPublishChapter(chaptersData)
      .then(response => {
        console.log("RESPONSE",response);
        if(response){
          history.push("./");    
        }
    })
  };

  const handleTags = (event:any) => {
    setTagInputDef("changeplease");
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
  };

  const handleChapterUpload = (event:any) => {
    setChapterPages([...chapterPages,event.target.files[0]]);
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
            if(name === "thumbnail"){
              setprevThumbnail(e.target.result);
              setToggleThumbSize(true);
              handleChapterCover(file);
            }
            // } else if (name === "banner"){
            //   setprevBanner(e.target.result);
            //   setToggleBannerSize(true);
            //   handleBanner(file);
            // }
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
        activeSeries={false}
        activeChapters={true}
        title={"Create new chapter"}
        message={"Have fun creating chapters, but play by the rules"}
      />

      <Div formContainer>
        
        <UploaderThumbContainer>
          <UploaderThumb 
            thumbnail
            thumbFull={toggleThumbSize} 
            prevThumb={prevThumbnail||uploadChap}>
            <UploaderField
              thumbnail
              type="file"
              onChange={e => handleUpload(e.target.files, "thumbnail")}/>
          </UploaderThumb>
          <UploaderLabel thumbnail>Upload Chapter Cover<span>(200 x 200px)</span></UploaderLabel>
        </UploaderThumbContainer>

        <Form>

          <Input>
            <Label fixed>Chapter Title</Label>
            <InputField 
              marginTop
              onChange={(e:any) => setChapterTitle(e.target.value)}/>
          </Input>

          <div>
            {chapterPages.length > 0 ?
              <>
                <Table imageUpload>
                  <tr>
                    <th>Pos</th>
                    <th>File name</th>
                    <th>File size</th>
                    <th>Up</th>
                    <th>Down</th>
                    <th>Delete</th>
                  </tr>       
                  {
                    chapterPages.map((el, index) => {
                      return  <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el.name}</td>
                                <td>{el.size}</td>
                                <td onClick={(e:any) => handleChangePosition("up",chapterPages,index,index-1)}><IoMdArrowRoundUp/></td>
                                <td onClick={(e:any) => handleChangePosition("down",chapterPages,index,index+1)}><IoMdArrowRoundDown/></td>
                                <td onClick={(e:any) => handleDeleteChapter(index)}><MdDeleteForever/></td>
                              </tr>
                    })
                  }   
                </Table> 
              </>: null
            }
            <UploaderChapter
              disabled={chapterPages.length > 2}>
              <UploaderField
                chapters
                disabled={chapterPages.length > 2}
                multiple
                type="file"
                onChange={handleChapterUpload}/>
              <UploaderLabel chapters>Upload chapters<span> (Max 40 pages)</span></UploaderLabel>
              <UploaderImg chapters src={uploadChap} alt="upload chapters"/>
            </UploaderChapter>
          </div>

          <Input>
              <Label fixed>Chapter Description</Label> 
              <TextArea 
                marginTop
                maxLength={500}
                onBlur={(e:any) => setChapterDescription(e.target.value)}
                placeholder="Less than 500 characters"/>
          </Input>

          <Input style={{marginBottom:"0rem"}}>
              <Label fixed>Tags<span  style={{fontSize:"1.6rem"}}> (Optional, max of 3 tags)</span></Label>
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
            <p style={{color: "#ccc"}}>Series tags:</p>
            {tags.map((el,index) => {
              return <p style={{marginLeft: "1rem"}} key={index}>{el}</p>
              })
            }
          </div>

          

          {/* <UploaderBannerContainer>
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
          </UploaderBannerContainer> */}

        
          <Div checkContainer>
            <Div style={{marginBottom:"1rem"}} consentContainer>
              <CheckBox onChange={e => setOpenComments(!openComments)}/>
              <p>Open for comments</p>
            </Div>
            <Div style={{marginBottom:"1rem"}} consentContainer>
              <CheckBox onChange={e => setMatureContents(!matureContents)}/>
              <p>Mature contents</p>
            </Div>
          </Div>
          
          <Div buttonContainer>
            <Button 
              width={"30rem"}
              height={"5.5rem"}
              secondary 
              onClick={handleSendForm}>
                Create new chapter
            </Button>
          </Div>
       
        </Form>
      </Div>
  
    </Container>

  );
};

export default  PublishComicsChapter;

