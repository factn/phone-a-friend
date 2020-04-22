import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './buttons/Button';
import * as Paths from '../Paths';
import * as Colors from '../Colors';
import { useToggle } from '../hooks';

const propsObj = {
  hasBorder: true,
  color: Colors.DARK_BLUE,
  className: 'top-nav-button',
  w:300,
};

const NavContainer = styled.nav`
  width: 100vw;
  height: 100vh;
  background: rgba(255,255,255, 1);
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
 
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr;
  align-content: center;
  justify-items: center;
`;



const HamburgerNav: React.FC = () => {
  const { isToggled, toggle } = useToggle(false);
  return (
    <>
      {!isToggled && (
        <div role="button" onClick={toggle}>
          <GiHamburgerMenu style={{ cursor: 'pointer' }} size={36} />
        </div>
      )}

      {isToggled && (
        <NavContainer>
          <IoMdClose
            onClick={toggle}
            style={{ position: 'absolute', cursor: 'pointer', top: 16, right: 16, fontSize: 48 }}
          />
          <Link to="/">
            <Button onClick={toggle} {...propsObj}>
              Home
            </Button>
          </Link>
          <Link to={Paths.USER_PATH}>
            <Button onClick={toggle} {...propsObj}>
              Phone a Friend
            </Button>
          </Link>
          <Link to={Paths.VOLUNTEER_PATH}>
            <Button onClick={toggle} {...propsObj}>
              Take a Call
            </Button>
          </Link>
          <Link to={Paths.CONTACT_PATH}>
            <Button onClick={toggle} {...propsObj}>
              Contact Us
            </Button>
          </Link>
          <Link to={Paths.LOGIN_PATH}>
            <Button onClick={toggle} {...propsObj}>
              Log In
            </Button>
          </Link>
        </NavContainer>
      )}
    </>
  );
};

export default HamburgerNav;
