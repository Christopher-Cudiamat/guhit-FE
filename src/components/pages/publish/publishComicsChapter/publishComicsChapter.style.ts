import styled, {css} from "styled-components";


interface IFormTypes { 
  helpNav?:boolean,
  formContainer?:boolean,
  thumbUploader?: boolean,
  genreContainer?: boolean,
  explicitContainer?: boolean,
  checkContainer?: boolean,
  consentContainer?:boolean,
  hash?: boolean,
  bannerUploader?: boolean,
  inputTagContainer?: boolean,
  buttonContainer?: boolean,
}


export const Container = styled.div<IFormTypes>`
    text-align:center; 
   
` 

export const Div = styled.div<IFormTypes>` 

  
  ${({formContainer}) => formContainer&&
    css`
      padding: 6rem 0rem;
      position:relative;
      max-width: 80rem;
      margin:auto;
      display:flex;

      & > div:first-child{
        margin-right: 7rem;
      }
    `
  };

  ${({genreContainer}) => genreContainer&&
    css`
      display: flex;
      justify-content: space-between;
    `
  };

  ${({checkContainer}) => checkContainer&&
    css`  
    `
  };

  ${({consentContainer}) => consentContainer&&
    css`
      display: flex;
      text-align: left;
      align-items: center;
      
      & > p {
        padding-left: 2rem;
        font-size: 2rem;
        line-height: 2rem;
        color: ${props => props.theme.color.blackLight};
      }
    `
  };

  
  ${({buttonContainer}) => buttonContainer&&
    css`
      margin-top: 6rem;
      display:  flex;
      justify-content:  flex-start; 
    `
  };

  ${({inputTagContainer}) => inputTagContainer&&
    css`
      display: flex; 
    `
  };
 
`
export const P= styled.p<IFormTypes>`
  ${({hash }) => hash &&
    css`
      position:absolute; 
      top: 50%;
      left: 2%;
      font-size: 2rem;
    `
  };   
`

export const Form = styled.form<IFormTypes>`
  width: 70rem;

  & div {
    margin-bottom: 4rem;
  }

      
`

