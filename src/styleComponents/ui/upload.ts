import styled, {css} from "styled-components";
import uploadChap from '../../images/upload.png';
import thumbTest from '../../images/uploadTest/thumbTest.jpg';

interface IUploaderTypes {
  thumbnail?: boolean,
  banner?: boolean,
  chapters?: boolean,
  thumbnailPrev?: any,
  backgroundImage?: any,
  prevThumb?: string,
  thumbFull?: boolean,
  prevBanner?: string,
  bannerFull?: boolean,
  prevCover?: string,
  coverFull?: boolean,
  cover?:boolean,
  
}


export const UploaderThumb= styled.div<IUploaderTypes>`
    height: 25rem;
    width: 25rem;
    position: relative; 
    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
    border: 2px #ccc dashed;
    background-image: ${props => props.backgroundImage ? `url(${props.prevThumb})` :`url(${props.prevThumb})`}; 
    /* background-size: ${props => props.thumbFull ? "90%" :"13rem 13rem"}; */
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center 50%;
`

export const UploaderBannerContainer= styled.div<IUploaderTypes>`
  overflow-x: hidden;
    & div:first-child{
      margin: 0rem;
    }    
      
    & label:last-child{   
      margin-top: 1rem;
      & span {
        font-size: 1.6rem;
      }
    }  
`

export const UploaderThumbContainer= styled.div<IUploaderTypes>`
   & label {
        display:block;
        padding: .5rem 0rem;
        margin-top: 1rem;
        line-height: 2.4rem;
        & span {
          display: block;
          font-size: 1.6rem;
        }
      }
`


export const UploaderCoverContainer= styled.div<IUploaderTypes>`

  & label {
    display:block;
    padding: .5rem 0rem;
    margin-top: 1rem;
    line-height: 2.4rem;
    & span {
      display: block;
      font-size: 1.6rem;
    }
  }
`

export const UploaderBanner= styled.div<IUploaderTypes>`
  height: 18rem;
  /* padding: 1rem 1rem; */
  position: relative; 
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  border: 2px #ccc dashed;
  background-image: ${props => props.backgroundImage ? `url(${props.prevBanner})` :`url(${props.prevBanner})`}; 
  background-size: ${props => props.bannerFull ? "90%" :"13rem 13rem"};
  background-repeat: no-repeat;
  background-position: center 50%;
`

export const UploaderCover= styled.div<IUploaderTypes>`
  height: 31rem;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  border: 2px #ccc dashed;
  background-image: ${props => props.backgroundImage ? `url(${props.prevCover})` :`url(${props.prevCover})`}; 
  background-size: ${props => props.coverFull ? "90%" :"13rem 13rem"};
  background-repeat: no-repeat;
  background-position: center 50%;
`

export const UploaderChapter= styled.div<IUploaderTypes>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px #ccc dashed;
`

export const UploaderField = styled.input<IUploaderTypes>`
  cursor: pointer;
  
  ${({chapters}) => chapters &&
    css`  
    width: 100%;
    height: 7rem;
    opacity: 0;
    `
  };

  ${({thumbnail}) => thumbnail &&
    css`  
    width: 100%;
    height: 100%;
    opacity: 0;
    `
  };

${({cover}) => cover &&
    css`  
    width: 100%;
    height: 100%;
    opacity: 0;
    `
  };

  ${({banner}) => banner &&
    css`  
    width: 100%;
    height: 100%;
    opacity: 0;
    `
  };
`



export const UploaderLabel = styled.label<IUploaderTypes>`
  ${({chapters}) => chapters &&
    css`  
      position: absolute;
      left: 13%;
      top: 33%;
      color: ${props => props.theme.color.gray}; 
      pointer-events: none;
      font-size: 2.5rem;
      & span {
        font-size: 1.6rem;
      }
    `
  }; 

  ${({thumbnail}) => thumbnail &&
    css`  
      color: ${props => props.theme.color.white}; 
      background: ${props => props.theme.color.gray}; 
      pointer-events: none;
      font-size: 1.8rem;
      padding: .5rem 3rem;
    `
  };

  ${({banner}) => banner &&
    css`  

      color: ${props => props.theme.color.white}; 
      background: ${props => props.theme.color.gray}; 
      pointer-events: none;
      font-size: 1.8rem;
      padding: 1rem 0rem;
      display: block;
      width:100%;
    `
  };

`

export const UploaderImg= styled.img<IUploaderTypes>`
  ${({chapters}) => chapters &&
    css`  
      position: absolute;
      right: 20%;
      top: 20%;
      opacity:0.7;
      width: 4rem;
      height: 4rem;
      color: red;
      pointer-events: none;
    `
  }; 

`
  
    /* background-image: url(${uploadChap});  */
    /* background-image: url(${thumbTest});  */
   /* background-image: url(${uploadChap});  */