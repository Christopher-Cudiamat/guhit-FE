import styled, {css} from "styled-components";

interface INavTypes {
  primary?: boolean,
  secondary?: boolean,
  filterNav?: boolean,
}

const Nav = styled.div<INavTypes>`
  position:relative;
  height: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  z-index: 100;

  ${({primary}) => primary &&
    css`
      justify-content: space-between;
    `
  };

  ${({secondary}) => secondary &&
    css`
      justify-content: space-between;
      margin-top: -1px;
    `
  };

  ${({filterNav}) => filterNav &&
    css`
    padding-left: 0rem;
    padding-right: 0rem;
    height: 5rem;
    position: relative;
    z-index: 20;
    background: ${props => props.theme.color.primary};

    `
  };


  
`


export default Nav;



