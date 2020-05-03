import styled from "styled-components";


interface IEventsTypes {

}

export const Div = styled.div<IEventsTypes>`
  padding: 3rem 2rem;
  margin: auto;
  display:flex;
  flex-direction: column;
  align-items:center;
  
  & div * {
    margin-bottom: 3rem;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
    max-height: 100rem;
  }
     
` 

 

 





