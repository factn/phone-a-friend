import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from './buttons/Button';
import * as Paths from '../Paths';
import * as Colors from '../Colors';
import { useStateValue } from '../contexts/AppContext';
import Media from '../utils/CustomMedia';

const NavContainer = styled.nav`
  display: grid;
  height: 100%;
  
  ${Media.greaterThan('desktop')`
    grid-auto-flow:column ;
    margin-right: 71px;
  `}
  ${Media.lessThan('desktop')`
    margin-right: 0;
    grid-template-columns: repeat(auto-fill);
    grid-gap: 10px;
  `}
`;

type Props = {
  h?: number;
};

const propsObj = {
  hasBorder: false,
  hoverColor: 'white',
  hoverBgColor: Colors.DARK_BLUE,
  color: Colors.DARK_BLUE,
  paddingLeft: '10px',
  paddingRight: '10px',
  w: '100%',
  h: '100%',
  className: 'top-nav-button',
};

const Nav: React.FC<Props> = () => {
  const location = useLocation();
  const { state } = useStateValue();

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
      {state.userAuthId === '' ? (
        <Link to={Paths.LOGIN_PATH}>
          <Button key="logIn" {...propsObj} selected={location.pathname === Paths.LOGIN_PATH}>
            Log In
          </Button>
        </Link>
      ) : (
        <>
          <Link to={Paths.ACCOUNT_PATH}>
            <Button key="accountPage" {...propsObj} selected={location.pathname.includes(Paths.ACCOUNT_PATH)}>
              My Account
            </Button>
          </Link>
          <Link to={Paths.LOGOUT_PATH}>
            <Button key="logOut" {...propsObj} selected={false}>
              Logout
            </Button>
          </Link>
        </>
      )}
    </NavContainer>
  );
};

export default Nav;
