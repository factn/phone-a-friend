import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from './buttons/Button';
import * as Paths from '../Paths';
import * as Colors from '../Colors';

const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: 1fr;
  height: 100%;
`;

type Props = {
  h?: number;
};

const propsObj = {
  hasBorder: false,
  hoverColor: 'white',
  hoverBgColor: Colors.DARK_BLUE,
  color: Colors.DARK_BLUE,
  paddingLeft: 40,
  paddingRight: 40,
  h: '100%',
  className: 'top-nav-button',
};

const Nav: React.FC<Props> = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <Link to={Paths.HOME}>
        <Button key="home" {...propsObj} selected={location.pathname === Paths.HOME}>
          Home
        </Button>
      </Link>
      <Link to={Paths.USER_PATH}>
        <Button key="phone" {...propsObj} selected={location.pathname === Paths.USER_PATH}>
          Phone a Friend
        </Button>
      </Link>
      <Link to={Paths.VOLUNTEER_PATH}>
        <Button key="take" {...propsObj} selected={location.pathname === Paths.VOLUNTEER_PATH}>
          Take a Call
        </Button>
      </Link>
      <Link to={Paths.CONTACT_PATH}>
        <Button key="contact" {...propsObj} selected={location.pathname === Paths.CONTACT_PATH}>
          Contact Us
        </Button>
      </Link>
      <Link to={Paths.LOGIN_PATH}>
        <Button key="logIn" {...propsObj} selected={location.pathname === Paths.LOGIN_PATH}>
          Log In
        </Button>
      </Link>
    </NavContainer>
  );
};

export default Nav;
