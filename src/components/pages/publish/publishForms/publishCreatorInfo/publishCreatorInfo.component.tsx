import React, { useState, useRef, useEffect } from 'react';
import PublishHeader from '../../publishForms/publishHeader/publishHeader.container';
import { ScrollToTopOnMount } from '../../../../../utility/scrollToTopOnMount';
import { formatToDataUrl, formatToImageFile } from '../../../../../utility/formatImage';
import InputProfilePic from './inputProfilePic/inputProfilePic.component';
import InputDisplayName from './inputDisplayName/inputDisplayName.component';
import InputCity from './inputCity/inputCity.component';
import InputDescription from './inputDescription/inputDescription.component';
import InputPatreon from './inputPatreon/inputPatreon.component';
import InputTools from './inputTools/inputTools.component';
import ButtonCreatorInfo from './buttonCreatorInfo/buttonCreatorInfo.component';
import { IImageUploadType } from './publishCreatorInfo.type';

import { Container, Div, Form } from './publishCreatorInfo.style';
import { Box } from '../../../../../styleComponents/ui/box.style';


const PublishCreatorInfo = (props:any) => {

  const {
    profile,
    registration,
    setCreatorProfile,
    setUpdateProfile,
    setAlert,
    removeAlert,
    alert
  } = props;

  
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
      displayName,
      city,
      description,
      patreon,
      tools,
      profilePic,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilePic,displayName,city,description,tools,patreon,alert]);


  useEffect(() => {
    setToolsInputDef("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tools]);


  return (
    <Container>

      <ScrollToTopOnMount/>

      <PublishHeader
        activeCreators={true}
        activeSeries={false}
        activeChapter={false}
        title={"Edit Profile"}
        message={"Its your first time publishing a series, let us guide you."}/>

      {
        alert.length > 0 
          ?  
          <Box errorTalkBubble>
            {alert[0].msg}
          </Box>
          : null       
      }
     
      <Div formContainer>
      
        <InputProfilePic
          profileSize={profileSize}
          prevProfile={prevProfile}
          setPrevProfile={setPrevProfile}
          setProfilePic={setProfilePic}
          setUpdateProfile={setUpdateProfile}
          setProfileSize={setProfileSize}
          setAlert={setAlert}
          removeAlert={removeAlert}/>
 
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
            setToolDisabled={setToolDisabled}
            setTools={setTools}/>

          <ButtonCreatorInfo
            token={registration.token}
            creatorsData={creatorsData}
            sendButton={sendButton}
            setCreatorProfile={setCreatorProfile}
            isCreator={profile.isCreator}/>
      
        </Form>
      </Div>
  
    </Container>

  );
};

export default  PublishCreatorInfo;
