import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './buttons/Button';
import * as Paths from '../Paths';
import * as Colors from '../Colors';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
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

const Nav: React.FC<Props> = () => (
  <NavContainer>
    <Link to="/">
      <Button {...propsObj}>Home</Button>
    </Link>
    <Link to={Paths.USER_PATH}>
      <Button {...propsObj}>Phone a Friend</Button>
    </Link>
    <Link to={Paths.VOLUNTEER_PATH}>
      <Button {...propsObj}>Take a Call</Button>
    </Link>
    <Link to={Paths.CONTACT_PATH}>
      <Button {...propsObj}>Contact Us</Button>
    </Link>
    <Link to={Paths.LOGIN_PATH}>
      <Button {...propsObj}>Log In</Button>
    </Link>
  </NavContainer>
);

export default Nav;
