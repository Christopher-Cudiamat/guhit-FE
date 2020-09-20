import styled, {css} from "styled-components";


interface IAccordionTypes {
  primary?: boolean,
  secondary?:boolean,
  dark?:boolean,
  show?:boolean,
}

export const Accordion = styled.div<IAccordionTypes>`
  background: none;
  border-bottom:solid 1px #444;
  font-weight: 500;
  @media ${props => props.theme.media.laptop} { 
    
  border-bottom:solid 2px #444;
  }
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

${({dark}) => dark &&
    css`  
      background: ${props => props.theme.color.blackLight};
    `
  };
  
`

export const AccordionTitle = styled.p<IAccordionTypes>`
  font-size: 2rem; 
  padding: 1.5rem 1rem;
  color: ${props => props.theme.color.white}; 
  font-weight: 500;
  display:flex;
  justify-content: space-between;

  &::after {
    margin-right: 5px;
    margin-top: 8px;
    content: '';
    border-left: 2px solid ${props => props.theme.color.white}; 
    border-top: 2px solid ${props => props.theme.color.white}; 
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
  background: ${props => props.theme.color.blackLight};
  padding:  2rem;
  color: ${props => props.theme.color.white};
  font-size: 1.6rem;
  line-height: 2.2rem;
  display: ${props => props.show ? "flex":"none"};
  flex-direction: column;
  @media ${props => props.theme.media.laptop} { 

    margin: auto;
  }
  
`


export const AccordionInput = styled.input<IAccordionTypes>`
  background: ${props => props.theme.color.blackLight};
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
  background: ${props => props.theme.color.blackLight};
`
