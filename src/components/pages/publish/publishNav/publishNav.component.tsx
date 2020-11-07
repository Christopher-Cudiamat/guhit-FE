import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import { navArray } from './publishNav.config';

import { Div } from './publishNav.style';

const PublishNav: React.FC = () => {

  return (
    <Div nav>
      <ul>
        {
          navArray.map((el,index) => 
            <Link
              key={index}   
              className="list" 
              activeClass="active" 
              to={el.link} 
              spy={true} 
              smooth={true} 
              offset={-53} 
              duration={500}>
              {el.title}
            </Link>
          )
        }
      </ul>
    </Div>
  );
};

export default  PublishNav;

