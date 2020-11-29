import styled from "styled-components";


interface IBannerTypes {
  full?: boolean,
  bgImg?: string,
  height?: string,
  large?: boolean,
  color?: string,
  fontSize?: string,
};

export const Banner = styled.div<IBannerTypes>`
  background: url(${props => props.bgImg});
  padding: 5rem 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -1px;
  position: relative;
  
  @media ${props => props.theme.media.laptop} { 
    height: ${props => props.height ? props.height : "100vh"};
    padding: 3rem 2rem;
  }
`

export const BannerTitle = styled.p<IBannerTypes>`
  font-size: ${props => props.fontSize ? props.fontSize : "6.4rem"};
  color: ${props => props.color ? props.color : "white"};
`

export const BannerText = styled.p<IBannerTypes>`
  font-size: ${props => props.fontSize ? props.fontSize : "1.8rem"};
  color: ${props => props.color ? props.color : "white"};
`




