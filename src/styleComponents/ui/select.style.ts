import styled, {css} from "styled-components";

interface ISelectTypes {
  fontSize?: string,
  fixed?:boolean,
  medium?:boolean,
  blackOutline?: boolean,
}



export const Select= styled.select<ISelectTypes>`
  width: ${props => props.medium ? "48%" : "100%"};
  height: 5rem;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.color.grayLight};
  font-size: ${props => props.fontSize ? props.fontSize : "1.8rem"};
  padding-left: .5rem;

  ${({fixed}) => fixed &&
    css
    ` 
    `
  }

  ${({blackOutline}) => blackOutline &&
    css`
      width: 50%; 
      color: ${props => props.theme.color.gray};
      border: solid .15rem ${props => props.theme.color.gray};
      height: 5rem;
      transition: all .5s;

      &:hover {
        color: ${props => props.theme.color.blackLight};
        border: solid .15rem ${props => props.theme.color.blackLight};
      }
      
    `
  };

  
`