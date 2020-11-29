import styled, {css} from "styled-components";


interface IFormTypes { 
  buttonContainer?: boolean,
}


export const Div = styled.div<IFormTypes>` 

  ${({buttonContainer}) => buttonContainer&&
    css`
      margin-top: 6rem;
      display:  flex;
      justify-content:  flex-start; 
    `
  };
      
`

