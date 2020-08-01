import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

interface ILinkTypes {
  primary?: boolean,
  secondary?: boolean,
  underlined?: boolean,
  passRecLink?: boolean,
  footer?: boolean,
  togglenav?: boolean,
  dark?:boolean,
  secondaryOutline?:boolean,
}

const Links = styled.a<ILinkTypes>`
  font-size: 1.6rem;

  ${({primary}) => primary &&
    css`  
      background: ${props => props.theme.color.black};
    `
  };

  ${({secondary}) => secondary &&
    css`
      font-size: 2.2rem;
      color: ${props => props.theme.color.secondaryDark};
    `
  };


  ${({underlined}) => underlined &&
    css`
      font-size: 2rem;
      font-weight: 500;
      color: ${props => props.theme.color.primaryDark};
      border-bottom: solid 1.5px #096B5A;
    `
  };

  ${({footer}) => footer &&
      css`
        font-size: 2.2rem;
        color: ${props => props.theme.color.primaryDark};
      `
    };
  `
;
export default Links;

export const LinkRouter = styled(Link)<ILinkTypes>`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${props => props.togglenav ? props.theme.color.primary : props.theme.color.white};

  ${({primary}) => primary &&
    css`  
      color: ${props => props.theme.color.primary};
    `
  };

  ${({secondary}) => secondary &&
    css`
      /* font-size: 2.2rem; */
      color: ${props => props.theme.color.secondaryDark};
    `
  };

  ${({dark}) => dark &&
    css`  
      color: ${props => props.theme.color.blackLight};
    `
  };

  ${({underlined}) => underlined &&
    css`
      font-size: 2rem;
      font-weight: 500;
      color: ${props => props.theme.color.primaryDark};
      border-bottom: solid 1.5px #096B5A;
    `
  };
  
  ${({secondaryOutline}) => secondaryOutline &&
    css`
      padding: 1rem 2rem;
      width: 50%; 
      color: ${props => props.theme.color.secondary};
      border: solid .15rem #F0B110;
      @media ${props => props.theme.media.laptop} { 
        width: 30rem;

      } 
    `
  };

  ${({footer}) => footer &&
    css`
      font-size: 2.2rem;
      color: ${props => props.theme.color.primaryDark};
    `
  };

  ${({passRecLink}) => passRecLink &&
    css`
      line-height: 2.8rem;
      font-size: 1.6rem;
      color: ${props => props.theme.color.gray};
    `
  };
`
  

