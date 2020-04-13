import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './buttons/Button';
import * as Paths from '../Paths';
import * as Colors from '../Colors';
import { useToggle } from '../hooks';

const propsObj = {
  hasBorder: false,
  hoverColor: 'white',
  hoverBgColor: Colors.DARK_BLUE,
  color: Colors.DARK_BLUE,
  w: '100%',
};

const NavContainer = styled.nav`
  width: 100%;
  height: 100%;
  background: whitesmoke;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const HamburgerNav: React.FC = () => {
  const { isToggled, toggle } = useToggle(false);
  return (
    <>
      {!isToggled && (
        <div role="button" onClick={toggle}>
          <GiHamburgerMenu size={36} />
        </div>
      )}

      {isToggled && (
        <NavContainer>
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
