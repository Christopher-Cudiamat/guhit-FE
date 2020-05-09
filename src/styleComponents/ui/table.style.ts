import styled, {css} from "styled-components";

interface ITableTypes {
  imageUpload?: boolean,
}


export const Table = styled.table<ITableTypes>`
  width: 100%;
  
  ${({imageUpload}) => imageUpload &&
    css` 

      & tr:first-child th{
        font-size: 1.4rem;
      } 
      

      & tr{
        &:nth-child(odd){
          background: #ddd;
        }
        &:nth-child(even){
          background: #eee;
        }
        &:first-child{
          background: #fff;
        }
      }

        & th{
          padding: 1rem;   
        
        &:first-child{
          width: 5%;   
          padding-left: 0rem;   
        }
        &:nth-child(2){
          width: 30%;  
          text-align: left;    
        }
        &:nth-child(3){
          width: 20%;    
          text-align: left; 
        }
        &:nth-child(4){
          width: 5%;    
        }
        &:nth-child(5){
          width: 5%;    
        }
        &:last-child{
          width: 5%;    
          text-align: center;  
          padding-right: 0rem;     
        }
      }

      & td{
        width: 16.6%; 
        padding: 1rem;   
        font-size: 1.2rem;
        
        &:first-child{
          width: 10%;    
          padding-left: 0rem;   
        }
        &:nth-child(2){
          width: 30%;  
          text-align: left;  
        }
        &:nth-child(3){
          width: 20%;  
          text-align: left;    
        }
        &:nth-child(4){
          width: 11.5%; 
          transition: all .1s;   
          &:hover {
            cursor: pointer;
            background: ${props => props.theme.color.primaryLight};
          }
        }
        &:nth-child(5){
          width: 5%; 
          transition: all .1s;   
          &:hover {
            cursor: pointer;
            background: ${props => props.theme.color.primaryLight};
          }   
        }
        &:last-child{
          width: 5%; 
          font-size: 1.4rem;
          padding-right: .5rem;
          padding-left: .5rem;
          transition: all .1s;   
          &:hover {
            cursor: pointer;
            background: ${props => props.theme.color.errorLight};
          }   
             
        }
      }


    `
  };
`
  

