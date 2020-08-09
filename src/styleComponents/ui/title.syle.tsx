import styled, {css} from "styled-components";

interface ITitleTypes {
  marginBottom?: string,
  fontWeight?: string,
  mobile?: boolean,
  desktop?: boolean,
}

export const TitlePage = styled.h1<ITitleTypes>`
  color: ${props => props.theme.color.grayLight};
  font-size:  2.8rem;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "2rem"}; 
  font-weight:  ${props => props.fontWeight ? props.fontWeight : "bold"}; 
  width: 100%;
  opacity: 0.8;
`

export const TitleSection = styled.h2<ITitleTypes>`
  color: ${props => props.theme.color.blackLight};
  font-size:  2.8rem;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "2rem"}; 
  font-weight:  ${props => props.fontWeight ? props.fontWeight : "500"}; 
`

export const TitleMain = styled.h1<ITitleTypes>`
  color: ${props => props.theme.color.white};
  font-size: 3.4rem;
  font-weight:  ${props => props.fontWeight ? props.fontWeight : "500"}; 

  ${({mobile}) => mobile &&
    css`
    display:block;
    @media ${props => props.theme.media.tablet} { 
      display:none;
    }
    `
  }; 
  

  ${({desktop}) => desktop &&
    css`
    display:none;
    @media ${props => props.theme.media.tablet} { 
      display:block;
    }
    `
  }; 
  
`









