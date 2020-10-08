import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PublishHeader from '../publishHeader/publishHeader.container';
import { ScrollToTopOnMount } from '../../../../utility/scrollToTopOnMount';
import { postProfile, updateProfile} from '../../../../services/profile';
import { formatToDataUrl, formatToImageFile } from '../../../../utility/formatImage';
import InputProfilePic from './inputProfilePic/inputProfilePic.component';
import InputDisplayName from './inputDisplayName/inputDisplayName.component';
import InputCity from './inputCity/inputCity.component';
import InputDescription from './inputDescription/inputDescription.component';
import InputPatreon from './inputPatreon/inputPatreon.component';
import InputTools from './inputTools/inputTools.component';
import { isWrongImageType, isWrongPixelSize } from '../../../../utility/validator';

import Button from '../../../../styleComponents/ui/button.style';
import { Container, Div, Form } from './publishCreatorInfo.style';
import { Box } from '../../../../styleComponents/ui/box.style';




const PublishCreatorInfo = (props:any) => {

  interface IImageUploadType {
    name?: string,
    lastModified?: number
    lastModifiedDate?:Date
    webkitRelativePath?: string,
    size?: number,
    type?: string,
  }

  const {
    profile,
    registration,
    setCreatorProfile,
    setUpdateProfile,
    setAlert,
    removeAlert,
    alert
  } = props;

  const history = useHistory();
  const inputToolsEl = useRef<HTMLInputElement>(null)
  const [toolDisabled,  setToolDisabled] = useState(false);
  const [profilePic, setProfilePic] = useState<IImageUploadType[] | File>([]);
  const [displayName, setDisplayName] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [patreon, setPatreon] = useState(""); 
  const [tools, setTools] = useState<string[]>([]);
  const [toolsInputDef, setToolsInputDef] = useState("");
  const [creatorsData, setCreatorsData] = useState({}); 
  const [prevProfile, setPrevProfile] = useState("");
  const [profileSize, setProfileSize] = useState(false);
  const [sendButton, setSendButton] = useState(true);

  useEffect(() => {  
    removeAlert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {

    if(profile.isCreator){
      formatToDataUrl(profile.profilePic, function(myBase64:any) {
        setPrevProfile(myBase64);
      });

      formatToImageFile(profile.profilePic, function(pic:any) {
        setProfilePic(pic);
      });

      setDisplayName(profile.userName);
      setCity(profile.city);
      setDescription(profile.description);
      setPatreon(profile.patreon);
      setTools(profile.tools);
    }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
   
  useEffect(() => {

    if(displayName !== "" && description !== "" && city !== "" && prevProfile !== "" && alert.length === 0){
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
  }, [profilePic,displayName,city,description,tools,patreon,alert]);


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
        if(profile.isCreator){
          history.push("./account");  
        } else { 
          history.push({
            pathname:"./publish-comic-series",
            state:  "isNewSeries"
          }); 
        }
      });
  };

  const handleUpdateProfile = (event:any) => {
    event.preventDefault(); 
    
    updateProfile(registration.token,creatorsData)
      .then(res => {
        setCreatorProfile(res);
        history.push("./account");  
      });
  };
  

  const handleTools = (event:any) => {
    event.preventDefault();
    if(tools.length >= 2) setToolDisabled(true);
    
    if(inputToolsEl && inputToolsEl.current) {
      inputToolsEl.current.focus();
      if(inputToolsEl.current.value.length > 1){
        setTools([...tools,inputToolsEl.current.value]);
      } 
    }
  };

  const handleDeleteArr = (indexClicked:number) => {
    const newTools = tools.filter((el,index) => index !== indexClicked);
    setTools(newTools);
    if(tools.length < 4) setToolDisabled(false);
  };  
  
  const handleUpload = (e:any, name: string) => {

    let img = new Image();
    img.src = window.URL.createObjectURL(e[0]);
    img.onload = () => {
      if (isWrongImageType(e[0].type)){
        setAlert("Please insert JPEG image","danger");
        return;
      } else if (isWrongPixelSize(img.height,img.width,"profilePic")){
        setAlert("Please insert the correct pixel size","danger");
        return;
      } else {
        removeAlert();  
        let file = e[0];
        let reader = new FileReader();
        reader.onload = function(e: any) {
          if(name === "profile"){
            setPrevProfile(e.target.result);
            setProfilePic(e.target.result);
            setUpdateProfile("profilePicPreview",e.target.result);
            setProfileSize(true);
            handleProfilePic(file);
          }
        };
        reader.readAsDataURL(file);
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
        message={"Its your first time publishing a series, let us guide you."}/>

      {alert.length > 0 ?  
        <Box errorTalkBubble>{alert[0].msg}</Box> : null       
      }
     
      <Div formContainer>
      
        <InputProfilePic
          profileSize={profileSize}
          prevProfile={prevProfile}
          handleUpload={handleUpload}/>
 
        <Form>

          <InputDisplayName
            displayName={displayName}
            setDisplayName={setDisplayName}/>

          <InputCity
            city={city}
            setCity={setCity}/>
          
          <InputDescription
           description={description}
           setDescription={setDescription}/>

          <InputPatreon
            patreon={patreon}
            setPatreon={setPatreon}/>

          <InputTools
            toolDisabled={toolDisabled}
            inputToolsEl={inputToolsEl}
            setToolsInputDef={setToolsInputDef}
            toolsInputDef={toolsInputDef}
            tools={tools}
            handleTools={handleTools}
            handleDeleteArr={handleDeleteArr}/>

          <Div buttonContainer>
            <Button 
              disabled={sendButton}
              width={"30rem"} 
              height={"5.5rem"} 
              secondary 
              onClick={profile.isCreator ? handleUpdateProfile : handleSendForm}>
                {profile.isCreator ? "Update profile" : "Create profile"}
            </Button>
          </Div>
        </Form>
      </Div>
  
    </Container>

  );
};

export default  PublishCreatorInfo;
