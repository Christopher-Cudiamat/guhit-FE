import styled, {css} from "styled-components";

interface ISelectTypes {
 
  fixed?:boolean,
  medium?:boolean,
}



export const Select= styled.select<ISelectTypes>`
  width: ${props => props.medium ? "48%" : "100%"};
  height: 5rem;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.color.grayLight};
  font-size:1.8rem;
  padding-left: .5rem;

  ${({fixed}) => fixed &&
    css
    `
    `
  }

  
`