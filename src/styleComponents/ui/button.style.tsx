import styled, {css} from "styled-components";

interface IButtonTypes {
  primary?: boolean,
  secondary?: boolean,
  secondaryOutline?: boolean,
  blackOutline?: boolean,
  whiteOutline?: boolean,
  social?: boolean,
  loginFaceBook?: boolean,
  loginGoogle?: boolean,
  width?: string,
  height?: string,
  fontSize?: string,
  primaryOutline?: boolean,
  disabled?:boolean,
  noFill?:boolean,
  
}

const Button = styled.button<IButtonTypes>`
  opacity:  ${props => props.disabled ? ".3":"1"};
  pointer-events:  ${props => props.disabled ? "none":"auto"};
  background: none;
  padding: 1.5rem 2rem 1.5rem 2rem;
  font-size: ${props => props.fontSize ? props.fontSize : "1.8rem"}; 
  border-radius: 8px;
  outline: none;
  border:none;
  width: ${props => props.width ? props.width  : props.width };
  height: ${props => props.height ? props.height  : props.height};

  @media ${props => props.theme.media.laptop} { 
      &:hover {
        opacity: ${props => props.disabled ? ".5":"1"};
        pointer-events:  ${props => props.disabled ? "none":"auto"};
        cursor: pointer;
        transition: all .5s;
    }
  }


  ${({primary}) => primary &&
    css`  
      background: ${props => props.theme.color.primary};
      color: ${props => props.theme.color.white};
    `
  };

  ${({loginFaceBook}) => loginFaceBook &&
    css`  
      text-align: left;
      margin-bottom: 2rem;
      color: ${props => props.theme.color.white};
      background: ${props => props.theme.color.link};
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    `
  };

  ${({loginGoogle}) => loginGoogle &&
    css`  
       margin-bottom: 2rem;
      text-align: left;
      color: ${props => props.theme.color.white};
      background: ${props => props.theme.color.violet};
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    `
  };
  

  ${({secondary}) => secondary &&
    css`
      color: ${props => props.theme.color.white};
      background: ${props => props.theme.color.secondary};
      box-shadow: 0px 3px 5px rgba(0,0,0,0.2);
    `
  };

  ${({secondaryOutline}) => secondaryOutline &&
    css`
      width: 50%; 
      color: ${props => props.theme.color.secondary};
      border: solid .15rem #F0B110;
      @media ${props => props.theme.media.laptop} { 
        width: 30rem;
      
      }
    
    `
  };

${({blackOutline}) => blackOutline &&
    css`
      width: 50%; 
      color: ${props => props.theme.color.gray};
      border: solid .20rem ${props => props.theme.color.gray};
      height: 5rem;
      transition: all .5s;

      &:hover {
        color: ${props => props.theme.color.blackLight};
        border: solid .15rem ${props => props.theme.color.blackLight};
      }
      
    `
  };
${({primaryOutline}) => primaryOutline &&
    css` 
      color: ${props => props.theme.color.primary};
      border: solid .15rem #0ACCA9;
    `
  };

${({whiteOutline}) => whiteOutline &&
    css`
      width: 50%; 
      color: ${props => props.theme.color.white};
      border: solid .15rem #ffffff;
      @media ${props => props.theme.media.laptop} { 
        width: 30rem;
      
      }
      
    `
  };

  ${({noFill}) => noFill &&
    css`
      color: ${props => props.theme.color.primaryLight};
    `
  };
`

export default Button;
