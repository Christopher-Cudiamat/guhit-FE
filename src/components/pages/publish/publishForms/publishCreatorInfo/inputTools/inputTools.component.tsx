import React from 'react';
import Button from '../../../../../../styleComponents/ui/button.style';
import { 
  Input,
  InputField, 
  Label 
} from '../../../../../../styleComponents/ui/input.style';
import {Div} from '../publishCreatorInfo.style';
import {TiEdit} from 'react-icons/ti';

interface inputToolsTypes {
  toolDisabled: boolean
  inputToolsEl: React.RefObject<HTMLInputElement>,
  setToolsInputDef:  React.Dispatch<React.SetStateAction<string>>,
  toolsInputDef: string,
  tools: string[],
  setTools: React.Dispatch<React.SetStateAction<string[]>>,
  setToolDisabled: React.Dispatch<React.SetStateAction<boolean>>
}



const inputPatreon: React.FC<inputToolsTypes> = ({
  toolDisabled,
  inputToolsEl,
  setToolsInputDef,
  toolsInputDef,
  tools,
  setTools,
  setToolDisabled
  }) => {


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

  

  return (
    <>
      <Input style={{marginBottom:"0rem"}}>
        <Label fixed>Tools<span  style={{fontSize:"1.6rem"}}> (Optional)</span></Label>
        <Div inputTagContainer style={{marginBottom:"0rem"}}>
          <InputField
            marginTop 
            style={{marginBottom: "1rem"}}
            disabled={toolDisabled}
            type="text" 
            ref={inputToolsEl} 
            maxLength={20}
            onChange={e => setToolsInputDef(e.target.value)}
            value={toolsInputDef}
            />
          <Button 
            width={"20rem"}
            height={"5rem"}
            style={{marginTop:"10px",marginLeft:"3px"}}
            secondary
            onClick={handleTools} 
            disabled={toolDisabled}>
            Add Tools
          </Button>
        </Div> 
      </Input>
      <div style={{display: "flex",flexDirection:"column",textAlign: "left", color: "#ccc",fontSize: "1.4rem"}}>
        <p style={{marginBottom: "1rem", color: "#aaa"}}>Tools:</p>
        {
          tools.map((el,index) => 
            <p 
              onClick={() => handleDeleteArr(index)}
              style={{lineHeight: "2rem"}}  
              key={index}>
              {el}<TiEdit fontSize={"2rem"}/></p>
          )
        }
      </div>
    </>
  );
}

export default inputPatreon;