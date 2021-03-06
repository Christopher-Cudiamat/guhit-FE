import styled, {css} from "styled-components";

interface IInputTypes {
  toggle?: boolean,
  bannerr?: boolean,
  leftPadding?:boolean,
  noBorder?:boolean,
  searchGlobal?:boolean,
  fixed?:boolean,
  marginTop?: boolean,
  marginBottom?: string,
  globalSearchInput?:boolean,
  disabledInput?:boolean,
  noTransparent?:boolean,

}

  
export const Input = styled.div<IInputTypes>`

  text-align: left;
  position: relative;
  width: 100%;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "0rem"};

  & label:last-child {
    color: ${props => props.theme.color.grayLight};
    position: absolute;
    font-size: 2rem;
    top: 25%;
    left: 3%;
  }
    
`

export const InputField = styled.input<IInputTypes>`
  
  opacity: ${props => props.noBorder ? "1" : props.noTransparent ? "1" : "0.5"};
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 2px solid ${props => props.noBorder ? "none" : props.theme.color.grayLight};
  padding-left : ${props => props.leftPadding ? "4rem" : props.noBorder ? "0rem" : "1rem"};
  box-sizing: border-box;
  font-size:1.8rem;
  outline: none;
  background: ${props => props.disabledInput ? props.theme.color.grayLight : props.theme.color.white};

  @media ${props => props.theme.media.laptop} { 
    margin-top : ${props => props.marginTop ? "1rem" : "0rem"};
  }

  ${({searchGlobal}) => searchGlobal &&
    css`
    display:none;
    @media ${props => props.theme.media.laptop} { 
      display:flex;
      padding-right:3.2rem;
      background: white;
      height: 3rem;
      border:none;
      width:18rem;
      margin-top : ${props => props.marginTop ? "10rem" : "0rem"};
    }
  `
  };
 

  &:focus + label, &:valid + label {
    position: absolute;
    top: -33%;
    left: 1%;
    font-size: 14px;
    transition: all .3s;
  }

  &:focus {
    border: ${props => props.noBorder ?  "none": props.searchGlobal ? "none" : "2px solid #3393FF"};
    opacity: ${props => props.globalSearchInput ?  "0.5": "1"};
    /* width: ${props => props.globalSearchInput ?  "120%": "100%"}; */
    transition: all .3s;
  } 
`


export const Label = styled.label<IInputTypes>`
  color: ${props => props.theme.color.grayLight};
  position: absolute;
  font-size: 2rem;
  top: 19%;
  left: 2%;
  pointer-events: none;

  ${({fixed}) => fixed &&
    css`
       position: relative;
       top: 29%;
       left: 0%;
       margin-bottom: 1rem;
       color: ${props => props.theme.color.blackLight};
    `
  };

  
`