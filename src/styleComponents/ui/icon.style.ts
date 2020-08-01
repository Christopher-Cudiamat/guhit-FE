import styled, {css} from "styled-components";

interface IIconTypes {
  small?: boolean,
  medium?: boolean,
  large?: boolean,
  white?: boolean,
  black?: boolean, 
  primary?: boolean,
  secondary?: boolean,
  togglenav?: boolean,
  onClick?:any,
  gray?:boolean,
  colorMenu?:boolean,
}

export const Icon = styled.div<IIconTypes>`
 
  height: 2.4rem;
  width: 2.4rem;
  color: 
  
  ${props => props.colorMenu
  ? props.theme.color.primary 
  : props.theme.color.white };
  transition: .5s all;


  ${({primary}) => primary &&
    css`
      color: ${props => props.theme.color.black};
    `
  };

  ${({secondary}) => secondary &&
    css`
      color: ${props => props.theme.color.secondary};
    `
  };

  ${({white}) => white &&
    css`
    color: ${props => props.theme.color.white};
    `
  };

  ${({black}) => black &&
    css`
    color: ${props => props.theme.color.primary};
    `
  };

${({gray}) => gray &&
    css`
    color: ${props => props.theme.color.grayLight};
    `
  };


  ${({small}) => small &&
    css`
      height: 1.6rem;
      width: 1.6rem;
    `
  };

  ${({medium}) => medium &&
    css`
      height: 3.2rem;
      width: 3.2rem;
    `
  };

  ${({large}) => large &&
    css`
      height: 4.8rem;
      width: 4.8rem;
    `
  };


  
`


