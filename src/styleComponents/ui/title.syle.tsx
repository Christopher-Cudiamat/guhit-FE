import styled from "styled-components";

interface ITitleTypes {
  marginBottom?: string,
  fontWeight?: string,

}

export const TitleMain = styled.h1<ITitleTypes>`
  color: ${props => props.theme.color.white};
  font-size: 3.4rem;
  font-weight:  ${props => props.fontWeight ? props.fontWeight : "500"}; 
`


export const TitleSection = styled.h2<ITitleTypes>`
  color: ${props => props.theme.color.blackLight};
  font-size:  2.8rem;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "2rem"}; 
  font-weight:  ${props => props.fontWeight ? props.fontWeight : "500"}; 
`









