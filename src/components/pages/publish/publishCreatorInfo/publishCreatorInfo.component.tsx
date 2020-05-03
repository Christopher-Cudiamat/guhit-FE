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




const PublishCreatorInfo = (props:any) => {

  interface IImageUploadType {
    name?: string,
    lastModified?: number
    lastModifiedDate?:Date
    webkitRelativePath?: string,
    size?: number,
    type?: string,
  }

  const {profile,registration,setCreatorProfile} = props;

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
  const [editProfilePic, setEditPrevProfile] = useState<string>(profile.profilePic);
  const [profileSize, setProfileSize] = useState<boolean>(false);
  const [sendButton, setSendButton] = useState<boolean>(true);

   
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

  console.log("DATA TO BE SENT", creatorsData);

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
        history.push("./publish-comic-series"); 
      })
    
  };

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

  const handleTools = (event:any) => {
    event.preventDefault();
    if(tools.length >= 2) {
      setToolDisabled(true);
    }
    if(inputToolsEl && inputToolsEl.current) {
      inputToolsEl.current.focus();
      if(inputToolsEl.current.value.length > 1){
        setTools([...tools,inputToolsEl.current.value]);
      } else {
        setTools([]);
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
              setPrevProfile(e.target.result);
              setProfilePic(e.target.result);
              setProfileSize(true);
              handleProfilePic(file);
              console.log(file)
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
            thumbnail
            thumbFull={profileSize} 
            prevThumb={profile.isCreator ? editProfilePic : prevProfile||uploadChap}>
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
              defaultValue={profile.isCreator ? profile.userName : ""}
              onChange={(e:any) => setDisplayName(e.target.value)}/>
          </Input>

          <Input>
            <Label fixed>City</Label>
            <InputField 
              marginTop
              defaultValue={profile.isCreator ? profile.city : ""}
              onBlur={(e:any) => setCity(e.target.value)}/>
          </Input>

          <Input>
              <Label fixed>Short description about yourself</Label> 
              <TextArea 
                marginTop
                maxLength={500}
                defaultValue={profile.isCreator ? profile.description : ""}
                onBlur={(e:any) => setDescription(e.target.value)}
                placeholder="Less than 500 characters"/>
          </Input>

          <Input>
            <Label fixed>Patreon account<span  style={{fontSize:"1.6rem"}}> (Optional)</span></Label>
            <InputField 
              marginTop
              defaultValue={profile.isCreator ? profile.patreon: ""}
              onBlur={(e:any) => setPatreon(e.target.value)}/>
          </Input>
          
          
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
            {tools.map((el,index) => {
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
                Create profile
            </Button>
          </Div>
       
        </Form>
      </Div>
  
    </Container>

  );
};

export default  PublishCreatorInfo;

