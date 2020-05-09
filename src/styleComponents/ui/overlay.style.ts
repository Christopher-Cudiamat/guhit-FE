import styled from "styled-components";

interface IOverlayTypes {
  toggle?: boolean,
  bannerr?: boolean,
  globalSearch?:boolean,
  light?: boolean,
  zIndex?:string
}

export const Overlay = styled.div<IOverlayTypes>`
  position: fixed;
  z-index: ${props => props.zIndex ? props.zIndex : "1"};
  top: 0%;
  left:0%;
  background: ${props => props.light ? props.theme.color.white : props.theme.color.black};
  opacity: ${props => (props.globalSearch ? "0.9" : "0.8")};

  display: block;
  width: 100vw;
  height: 100vh;
  
  @media ${props => props.theme.media.laptop} { 
    display: ${props => props.light ? "block" : "none"};
  }

`

export const OverlayBanner = styled.div<IOverlayTypes>`
  position: absolute;
  opacity: 1;
  display: block;
  width: 100vw;
  
`


