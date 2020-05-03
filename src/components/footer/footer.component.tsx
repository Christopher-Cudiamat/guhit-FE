import React from 'react';
import { Div, Ul, List, Brand } from './footer.style';
import Link from '../../styleComponents/ui/link.style';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import logo from "../../images/logos/heade-logo.png"





const Footer = (props:any) => {
  return (
    <>
      <Div>

      <Brand>
          <img src={logo} alt="logo"/>
          <p>Guhit</p>
      </Brand>

      

        <Ul upperFooter>
          <List>
              <Link footer>
                Publish
              </Link>
          </List>
          <List>
              <Link footer>
                Creators
              </Link>
          </List>
          <List>
              <Link footer>
                News and events
              </Link>
          </List>
          <List>
              <Link footer> 
                About Us
              </Link>
          </List>
          <List>
              <Link footer>
                Contact Us
              </Link>
          </List>
        </Ul>


        <Ul socialFooter>
          {/* <List social>
              <Link>
                <FaFacebookSquare size={40}/>
              </Link>
          </List> */}
          <List social>
              <Link footer>
                <FaFacebookSquare size={40}/>
              </Link>
          </List>
          <List social>
              <Link footer>
                <AiFillInstagram size={40}/>
              </Link>
          </List>
          <List social>
              <Link footer> 
                <FaLinkedin size={40}/>
              </Link>
          </List>
        </Ul>

        <Ul lowerFooter>
          <List>
              <Link footer>
                @Guhit 2020
              </Link>
          </List>
          <List>
              <Link footer>
                Privacy
              </Link>
          </List>
          <List>
              <Link footer>
                Terms & Conditions
              </Link>
          </List>
          <List>
              <Link footer>
                Content
              </Link>
          </List>
        </Ul>
      </Div>
    </>
  );
};

export default Footer;
