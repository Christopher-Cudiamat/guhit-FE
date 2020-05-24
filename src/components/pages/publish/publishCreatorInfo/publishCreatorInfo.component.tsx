import React, { useState, useRef, useEffect } from 'react';
import { Container, Div, Form } from './publishCreatorInfo.style';
import { useHistory } from 'react-router-dom';
import { Input, InputField, Label } from '../../../../styleComponents/ui/input.style';
import { TextArea } from '../../../../styleComponents/ui/textarea.style';
import Button from '../../../../styleComponents/ui/button.style';
import PublishHeader from '../publishHeader/publishHeader.container';
import uploadChap from '../../../../images/upload.png';
import {UploaderField, UploaderLabel, UploaderThumb, UploaderThumbContainer } from '../../../../styleComponents/ui/upload';
import { ScrollToTopOnMount } from '../../../../utility/scrollToTopOnMount';
import {TiEdit} from 'react-icons/ti';
import { postProfile} from '../../../../services/profile';
import { formatToDataUrl } from '../../../../utility/formatImage';




const PublishCreatorInfo = (props:any) => {

  interface IImageUploadType {
    name?: string,
    lastModified?: number
    lastModifiedDate?:Date
    webkitRelativePath?: string,
    size?: number,
    type?: string,
  }

  const {profile,registration,setCreatorProfile,setUpdateProfile,setUpdateTools} = props;

  const history = useHistory();
  const inputToolsEl = useRef<HTMLInputElement>(null)
  const [toolDisabled,  setToolDisabled] = useState<boolean>(false);
  // const [socialDisabled,  setSocialDisabled] = useState<boolean>(false);
  // const inputSocialEl = useRef<HTMLInputElement>(null)
   const [profilePic, setProfilePic] = useState<IImageUploadType[]>([]);
  const [displayName, setDisplayName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [patreon, setPatreon] = useState<string>("");
  const [social, setSocial] = useState<string[]>([]);  
  const [tools, setTools] = useState<string[]>([]);
  const [socialInputDef, setSocialInputDef] = useState<string>("");
  const [toolsInputDef, setToolsInputDef] = useState<string>("");
  const [creatorsData, setCreatorsData] = useState({}); 
  const [prevProfile, setPrevProfile] = useState<string>("");
  const [profileSize, setProfileSize] = useState<boolean>(false);
  const [sendButton, setSendButton] = useState<boolean>(true);

  useEffect(() => {
      
    if(profile.isCreator){
      formatToDataUrl(profile.profilePic, function(myBase64:string) {
        setPrevProfile(myBase64);
      });
      setPrevProfile(profile.profilePic);
      setProfilePic(profile.profilePic);
      setDisplayName(profile.userName);
      setCity(profile.city);
      setDescription(profile.description);
      setPatreon(profile.patreon);
      setTools(profile.tools);
    }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
  useEffect(() => {

    if(displayName !== "" && description !== "" && city !== "" && prevProfile !== ""){
      setSendButton(false);
    } else {
      setSendButton(true);
    }
    setCreatorsData({
      profilePic,
      displayName,
      city,
      description,
      patreon,
      tools,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilePic,displayName,city,description,social,tools,patreon]);


  useEffect(() => {
    setSocialInputDef("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [social]);

  useEffect(() => {
    setToolsInputDef("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tools]);

  
  const handleProfilePic = (event:any) => {
    setProfilePic(event);
  };

//THIS IS FOR SENDING API TO BE USED LATER

  const handleSendForm = (event:any) => {
    event.preventDefault();
    postProfile(registration.token,creatorsData)
      .then(res => {
        setCreatorProfile(res);
        history.push({
          pathname:"./publish-comic-series",
          state:  "isNewSeries"
        }); 
      })
    
  };


  const handleTools = (event:any) => {
    event.preventDefault();
    if(tools.length >= 2) {
      setToolDisabled(true);
    }
    if(inputToolsEl && inputToolsEl.current) {
      inputToolsEl.current.focus();
      if(inputToolsEl.current.value.length > 1){
        setTools([...tools,inputToolsEl.current.value]);
        console.log("CLICKED")
      } 
    }
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
            if(name === "profile"){
              console.log("PREV",e.target.result)
              setPrevProfile(e.target.result);
              setProfilePic(e.target.result);
              setUpdateProfile("profilePicPreview",e.target.result);
              setProfileSize(true);
              handleProfilePic(file);
            }
          };
          reader.readAsDataURL(file);
          
        }else {
          e.target.value = "";
          alert("Exceed maximum")
        };
      } else {
        e.target.value = "";
        alert("Please insert correct image type only")
      };
  };

 

  const handleDeleteArr = (indexClicked:number, name:string) => {
    if(name==="social"){
      const newSocial = social.filter((el,index) => index !== indexClicked);
      setSocial(newSocial);
    }
    if(name==="tools"){
      const newTools = tools.filter((el,index) => index !== indexClicked);
      setTools(newTools);
      if(tools.length < 4){
        setToolDisabled(false);
        console.log("toolsDis",toolDisabled);
      }
    }
  };  


  return (
    <Container>

      <ScrollToTopOnMount/>

      <PublishHeader
        activeCreators={true}
        activeSeries={false}
        activeChapter={false}
        title={"Edit Profile"}
        message={"Its your first time publishing a series, let us guide you."}
      />
     
      <Div formContainer>
        
        <UploaderThumbContainer >
          <UploaderThumb 
            circular
            thumbnail
            thumbFull={profileSize} 
            prevThumb={prevProfile||uploadChap}
            >
            <UploaderField
              thumbnail
              type="file"
              onChange={e => handleUpload(e.target.files, "profile")}/>
          </UploaderThumb>
          <UploaderLabel thumbnail>Upload Profile<span>(250 x 250px)</span></UploaderLabel>
        </UploaderThumbContainer>
 
        <Form>

          <Input>
            <Label fixed>Display Name <span  style={{fontSize:"1.6rem"}}>(your nickname in Guhit app)</span></Label>
            <InputField 
              marginTop
              defaultValue={displayName}
              onChange={(e:any) => setDisplayName(e.target.value)}/>
          </Input>

          <Input>
            <Label fixed>City</Label>
            <InputField 
              marginTop
              defaultValue={city}
              onBlur={(e:any) => setCity(e.target.value)}/>
          </Input>

          <Input>
              <Label fixed>Short description about yourself</Label> 
              <TextArea 
                marginTop
                maxLength={500}
                defaultValue={description}
                onBlur={(e:any) => setDescription(e.target.value)}
                placeholder="Less than 500 characters"/>
          </Input>

          <Input>
            <Label fixed>Patreon account<span  style={{fontSize:"1.6rem"}}> (Optional)</span></Label>
            <InputField 
              marginTop
              defaultValue={patreon}
              onBlur={(e:any) => setPatreon(e.target.value)}/>
          </Input>

          <Input style={{marginBottom:"0rem"}}>
              <Label fixed>Tools<span  style={{fontSize:"1.6rem"}}> (Optional)</span></Label>
              <Div inputTagContainer style={{marginBottom:"0rem"}}>
                <InputField
                  marginTop 
                  style={{marginBottom: "1rem"}}
                  disabled={toolDisabled}
                  type="text" 
                  ref={inputToolsEl} 
                  onChange={e => setToolsInputDef(e.target.value)}
                  value={toolsInputDef}
                  />
                <Button 
                  width={"20rem"}
                  height={"5rem"}
                  style={{marginTop:"10px",marginLeft:"-3px"}}
                  primaryOutline
                  onClick={handleTools} 
                  disabled={toolDisabled}>
                  Add media
                </Button>
              </Div>
          </Input>
          <div style={{display: "flex",flexDirection:"column",textAlign: "left", color: "#ccc",fontSize: "1.4rem"}}>
            <p style={{marginBottom: "1rem", color: "#aaa"}}>Tools:</p>
            {
              tools.map((el,index) => {
                return <p 
                        onClick={e => handleDeleteArr(index, "tools")}
                        style={{lineHeight: "2rem"}}  
                        key={index}>
                        {el}<TiEdit fontSize={"2rem"}/></p>
              })
            }
          </div>

          
          <Div buttonContainer>
            <Button 
              disabled={sendButton}
              width={"30rem"} 
              height={"5.5rem"} 
              secondary 
              onClick={handleSendForm}>
                {profile.isCreator ? "Update profile" : "Create profile"}
            </Button>
          </Div>
       
        </Form>
      </Div>
  
    </Container>

  );
};

export default  PublishCreatorInfo;

  // const handleSocial = (event:any) => {
  //   event.preventDefault();
  //   if(social.length >= 2) {
  //     setSocialDisabled(true);
  //   }
  //   if(inputSocialEl && inputSocialEl.current) {
  //     inputSocialEl.current.focus();
  //     if(inputSocialEl.current.value.length > 1){
  //       setSocial([...social,inputSocialEl.current.value]);
  //     } else {
  //       setSocial([]);
  //     }
  //   }
  // };


            
          {/* ////CREATOR SOCIAL MEDIA 
              <Input style={{marginBottom:"0rem"}}>
              <Label fixed>Social Media<span  style={{fontSize:"1.6rem"}}> (Optional, Photoshop etc.)</span></Label>
              <Div inputTagContainer style={{marginBottom:"0rem"}}>
                <InputField
                  marginTop 
                  style={{marginBottom: "1rem"}}
                  disabled={socialDisabled}
                  type="text" 
                  ref={inputSocialEl} 
                  onChange={e => setSocialInputDef(e.target.value)}
                  value={socialInputDef}
                  />
                <Button 
                  width={"20rem"}
                  height={"5rem"}
                  style={{marginTop:"10px",marginLeft:"-3px"}}
                  primaryOutline
                  onClick={handleSocial} 
                  disabled={socialDisabled}>
                  Add tools
                </Button>
              </Div>
          </Input>
          <div style={{display: "flex", flexDirection:"column",textAlign: "left",color: "#ccc",fontSize: "1.4rem"}}>
            <p style={{marginBottom: "1rem",color: "#aaa"}}>Social media links:</p>
            {social.map((el,index) => {
              return <p 
                        onClick={e => handleDeleteArr(index, "social")} 
                        style={{lineHeight: "2rem"}} 
                        key={index}>
                        {el}<TiEdit fontSize={"2rem"}/>
                      </p>
              })
            }
          </div> */}