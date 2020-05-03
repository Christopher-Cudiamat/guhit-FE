import styled, {css} from "styled-components";

interface IBoxTypes {
  errorBig?: boolean,
  errorSmall?: boolean,
  errorMedium?: boolean,
  secondaryBig?: boolean,
  errorTalkBubble?:boolean,
  secondaryTalkBubble?: boolean,
}

export const Box = styled.div<IBoxTypes>`
  border-radius: .8rem;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.error};
  padding: 2rem 2rem;
  
 ${({errorBig}) => errorBig &&
    css`  
      font-size: 2.4rem;
    `
  };

 ${({errorTalkBubble}) => errorTalkBubble &&
    css`  
      padding:2rem;
      background:  ${props => props.theme.color.error};;
      position: relative;
      border-radius: 10px;
      width:70%;
      margin:auto;

      &:before {
      right: 41%;
      content: "";
      position: absolute;
      bottom: -51%;
      width: 0;
      height: 0;
      border-top: -1px solid transparent;
      border-left: 28px solid  ${props => props.theme.color.error};;
      border-bottom: 39px solid transparent
    }
    `
  }; 

  ${({errorMedium}) => errorMedium &&
      css`  
        font-size: 2rem;
      `
    };

  ${({errorSmall}) => errorSmall &&
      css`  
        font-size: 1.6rem;
      `
    };
    
  ${({secondaryBig}) => secondaryBig &&
      css`  
        font-size: 2.4rem;
        padding: 5rem 2rem;
        background: ${props => props.theme.color.secondaryDark};
        /* clip-path: polygon(30% 25%, 68% 29%, 98% 37%, 100% 70%, 79% 93%, 22% 84%, 0% 70%, 0 40%); */
      `
  };

${({secondaryTalkBubble}) => secondaryTalkBubble &&
    css`  
      padding:2rem;
      background:  ${props => props.theme.color.secondary};;
      position: relative;
      border-radius: 10px;
      width:70%;
      margin:auto;

      &:before {
      right: 41%;
      content: "";
      position: absolute;
      bottom: -51%;
      width: 0;
      height: 0;
      border-top: -1px solid transparent;
      border-left: 28px solid  ${props => props.theme.color.secondary};;
      border-bottom: 39px solid transparent
    }
    `
  }; 

`