import styled, {css} from "styled-components";


interface IAccordionTypes {
  primary?: boolean,
  secondary?:boolean,
  show?:boolean,
}

export const Accordion = styled.div<IAccordionTypes>`
  background: none;
  border:solid 1px ${props => props.theme.color.secondaryDark}; 
  font-weight: 500;
}
  

  ${({primary}) => primary &&
    css`  
      background: ${props => props.theme.color.primary};
    `
  };

   ${({secondary}) => secondary &&
    css`  
      background: ${props => props.theme.color.secondary};
    `
  };
  
`

export const AccordionTitle = styled.p<IAccordionTypes>`
  font-size: 2rem; 
  padding: 1.5rem 1rem;
  color: ${props => props.theme.color.blackLight}; 
  font-weight: 500;
  display:flex;
  justify-content: space-between;

  &::after {
    margin-right: 5px;
    margin-top: 8px;
    content: '';
    border-left: 2px solid ${props => props.theme.color.blackLight}; 
    border-top: 2px solid ${props => props.theme.color.blackLight}; 
    width: 5px;
    height: 5px;
    transition: all .3s;
    ${props => props.show 
    ? `transform:rotate(223deg)` 
    : `transform:rotate(137deg)`
    } 

  }
`


export const AccordionDetails = styled.p<IAccordionTypes>`
  text-align:center;
  background: ${props => props.theme.color.white};
  padding:  2rem;
  color: ${props => props.theme.color.gray};
  font-size: 1.4rem;
  line-height: 2rem;
  display: ${props => props.show ? "flex":"none"};
  flex-direction: column;
  @media ${props => props.theme.media.laptop} { 
    width: 90%;
    margin: auto;
  }
  
`


export const AccordionInput = styled.input<IAccordionTypes>`
  background: none;
  outline: none;
  width: -webkit-fill-available;
  display:block;
  border-radius:1rem;
  border: 1.5px solid ${props => props.theme.color.white};
  padding:  1rem 1rem 1rem 1rem; 
  color: ${props => props.theme.color.white};
  font-size: 1.6rem;

  &::placeholder {
  color: ${props => props.theme.color.white};
  text-transform: italic;
  }

  &:focus::placeholder {
    color: transparent;
  }
`

export const AccordionInputControl = styled.div<IAccordionTypes>`
  position: relative;
  margin:  0rem 2rem 1rem 2rem;
  display: ${props => props.show ? "block":"none"};
`
