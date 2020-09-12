import styled, {css} from "styled-components";

interface ICardTypes {
  primary?: boolean,
  secondary?: boolean,
  container?: boolean,
  containerCenter?: boolean,
  horizontal?:boolean,
  horizontalSquare?:boolean,
  containerSpaceAround?:boolean,
  containerSpaceEvenly?:boolean,
  forSlider?:boolean,
  chapters?:boolean,
  grid?:boolean;
}


const Card = styled.div<ICardTypes>`
  background: none;

  @media ${props => props.theme.media.tablet} { 
    & img:hover {
      opacity: 0.7;
      cursor:pointer;
      transform: scale(1.07);
      transition: all .5s;
    }
  }

  ${({container}) => container &&
    css`  
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `
  };  
  
  ${({containerSpaceEvenly}) => containerSpaceEvenly &&
    css`  
      display:grid;
      grid-template-columns: 1.2fr 1.2fr ;
      grid-gap: 20px;

      & div:nth-child(odd){
        width: 100%;
        
      }

      & div:nth-child(even){
        width: 100%;
      }

      @media ${props => props.theme.media.laptop} { 
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 40px;
      }

    `
  };

  ${({containerSpaceAround}) => containerSpaceAround &&
    css`  
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `
  }; 

  ${({containerCenter}) => containerCenter &&
    css`  
      display: flex;
      flex-wrap: wrap;
      justify-content: center
    `
  };

  ${({primary}) => primary &&
    css`  
    width: 48%; 
    margin-bottom: 2rem;

    @media ${props => props.theme.media.tablet} { 
      width: 20%;
    }
    @media ${props => props.theme.media.laptop} { 
      width: 22%;
    }

    & img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    & div {
      margin-top: 1.5rem;
      font-size: 1.4rem;
      color: ${props =>  props.theme.color.gray};
      display: flex;
      justify-content: space-between;

    }

    `
  };

  ${({secondary}) => secondary &&
    css`  
      border-radius: 1rem;
      width: 75%;
      margin-bottom: 2rem;
      box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    `
  };

${({grid}) => grid &&
    css`  
      display: grid;
      margin-bottom: 1rem;
   
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    & div {
      margin-top: .5rem;
      font-size: 1.4rem;
      color: ${props =>  props.theme.color.gray};
      display: flex;
      grid-template-columns: 1fr 1fr ;
      justify-content: space-between;
    }
    `
  };


  ${({horizontal}) => horizontal &&
    css`  
      cursor:pointer;
      text-align: left;
      display: flex;
      width: 100%;
      padding: 1rem 1rem;
      box-shadow: 0 2px 3px rgba(182, 182, 182, 0.35);

      @media ${props => props.theme.media.tablet} { 
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
        width: 25%;
        border-radius: 2rem;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1.5rem 1rem;
        margin: 0rem 0rem 3rem 0rem;
       
        &:hover {
          padding: 1.4rem .9rem; 
          border: solid 1px #ccc;
        }
      }
      
      & img:first-child{
        width: 8rem;
        height: 8rem;
        border-radius: 50%;

        @media ${props => props.theme.media.tablet} { 
          width: 15rem;
          height: 15rem;
        }
      }
      & div:last-child{
        display: flex;
        flex-direction: column;
        justify-content:center;
        
        /* width: 30%; */
        & p:first-child{
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 700;
          color: ${props =>  props.theme.color.blackLight};
        }
        & ul:last-child{
          font-size: 1.6rem;
        }
        
      }
    `
  };


${({horizontalSquare}) => horizontalSquare &&
    css`  
    padding-right: 2rem;
    text-align: left;
    display: flex;
    width: 100%;
    box-shadow: 0 2px 3px rgba(182, 182, 182, 0.30);

    @media ${props => props.theme.media.tablet} { 
     display:flex
     width: 30%;
    }

      &:nth-child(odd) {
        background: #fff;
        
      }

      &:nth-child(even) {
        background: #eee;
      }
      
      & img:first-child{
        outline: none;
        width: ${props => props.forSlider ? "90%" : "40%"};
        height: auto;
        border-radius: 5px;
        
      }
      & div:last-child{
        margin-right: .5rem; 
        width: 55%;
        display:flex;
        flex-direction:column;
        & p:first-child{
          font-size: 1.8rem;
          margin-top: 1rem;
          margin-bottom: .5rem;
          font-weight: 500;
          color: ${props =>  props.theme.color.gray};
            @media ${props => props.theme.media.tablet} { 
              color: ${props =>  props.theme.color.gray};
              font-size: ${props => props.chapters ? "2.2rem": "1.2rem"};
             
            }
        }
        & p:nth-child(2){
          font-size: 1.2rem;
          color: ${props =>  props.theme.color.grayLight};
          @media ${props => props.theme.media.tablet} { 
            font-size: ${props => props.chapters ? "1.4rem": "1.2rem"};    
          }
        }
        & p:last-child{
          margin-top: 1rem;
          font-size: 2.2rem;
          font-weight: 500;
          color: ${props =>  props.theme.color.grayLight};
          @media ${props => props.theme.media.tablet} { 
              color: ${props =>  props.theme.color.gray};
              font-size: ${props => props.chapters ? "2rem": "1.2rem"};  
              margin-top: .5rem;
          }
        
        }
        
      }
    `
  };

`

export default Card;
