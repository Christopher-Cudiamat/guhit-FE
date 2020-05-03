import styled from "styled-components";

interface ILiType {
  last?:boolean;
  active?:boolean;
}


export const Ul = styled.ul`
display: flex;
align-items: center;
overflow-x: scroll;
&::-webkit-scrollbar {
  display: none;
}

@media ${props => props.theme.media.laptop} { 
  width:80rem;
  margin: auto;      
}

`

export const Li = styled.li<ILiType>`

  width: 10rem;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  font-size: 1.6rem;
  line-height: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-weight: bold;
  background: 
  ${props => props.active ? props.theme.color.primaryLight : props.theme.color.primary};
  color: 
  ${props => props.active ? props.theme.color.primaryDark : props.theme.color.primaryDark};
  text-align:center;

  @media ${props => props.theme.media.laptop} { 
    font-size: 1.4rem;  
    font-weight: 500;  
    padding-right: .5rem;
    padding-left: .5rem;
  }


`

export const LiLast = styled.li`
 padding-left: 1.28571429em;
  text-indent: -1.28571429em;
  margin-right: 5rem;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: bold;
  color: ${props => props.theme.color.primaryDark};

`

// padding-right: ${props => props.last ? "15rem" : "2.5rem"};