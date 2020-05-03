import styled, {css} from "styled-components";

interface IPublishNavTypes { 

  steps?:boolean,
  helpNav?:boolean,
  tipsNav?:boolean,
  active?:boolean,
}


export const Container = styled.div<IPublishNavTypes>`
    text-align:center; 
   
` 

export const Div = styled.div<IPublishNavTypes>` 

  ${({steps}) => steps &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme.color.primary};
    
    `
  };

  ${({helpNav}) => helpNav &&
    css`
      background: ${props => props.theme.color.grayLigt};
      color: ${props => props.theme.color.gray};
      border-bottom: solid 1px ${props => props.theme.color.grayLight};
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;

      & p:first-child {
       font-size: 1.8rem;
      }

    `
  };      
`

export const Ul = styled.ul<IPublishNavTypes>`
  ${({tipsNav}) => tipsNav &&
    css`
      margin-top: 3px;
      display: flex;
      align-items: center;
      & > * {
        cursor: pointer;
        margin-left: 2rem;
        font-weight: 700;
      }
    `
  };
   
` 

export const P = styled.p<IPublishNavTypes>`
  font-weight: 700;
  margin-top: ${props => props.active ? "10rem" : "0rem"};
  color: ${props => props.active ? props.theme.color.white : props.theme.color.primaryDark};
  margin: 0rem 2rem;
  font-size: 2.5rem;
  padding:  ${props => props.active ? `1.8rem` : "2rem"} 5rem;
   
` 




