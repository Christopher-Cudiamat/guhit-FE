import styled from "styled-components";

interface ISwitchToDesktopTypes {
  
}

// export const DivUnderlay = styled.div<ISwitchToDesktopTypes>`
//   position: fixed;
//   width: 100%;
//   height: 101vh;
//   background:  ${props => props.theme.color.black};
//   opacity: .9;
//   top: 0px;
//   z-index: 999;

// `

export const DivInfo = styled.div<ISwitchToDesktopTypes>`

  background:  ${props => props.theme.color.white};
  width: 85%;
  border-radius:1rem;
  height: 60vh;
  position: fixed;
  opacity: 1;
  top:50%; 
  left:50%; 
  transform:translate(-50%, -50%); 
  padding: 2rem 1rem;
  z-index: 9999;

  
  & h3:nth-child(2){
    color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.secondary};
    padding: 1rem;
    font-weight: 400;
  }

  & img:last-child{
    height: 30rem;
    width: auto;
    margin-left: 5rem; 
  }

`



      
