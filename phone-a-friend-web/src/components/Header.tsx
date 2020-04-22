import React from 'react';
import styled from 'styled-components';
import Media from '../utils/CustomMedia';
import * as Constants from '../utils/Constants';
import Nav from './Nav';
import HamburgerNav from './HamburgerNav';

interface Iprops {
  h?: number;
}

const MainDiv = styled.div<Iprops>`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${Media.greaterThan('mobile')`
    margin-left: ${Constants.OUTSIDE_MARGIN}px;
    margin-right: ${Constants.OUTSIDE_MARGIN}px;
  `}
  ${Media.lessThan('mobile')`
    margin-left: ${Constants.OUTSIDE_MOBILE_MARGIN_PIXELS}px;
    margin-right: ${Constants.OUTSIDE_MOBILE_MARGIN_PIXELS}px;
  `}
`;

const Headline = styled.h1`
  font-weight: 600;
  ${Media.greaterThan('mobile')`
    font-size: 1.563rem;
  `}
  ${Media.lessThan('mobile')`
    font-size:1.063rem;
  `}
`;
type Props = {
  isMobile: boolean;
};

const Header: React.FC<Props> = ({ isMobile }) => (
  <MainDiv>
    <Headline>PhoneAFriend.care</Headline>
    {!isMobile ? <Nav /> : <HamburgerNav />}
  </MainDiv>
);

Header.whyDidYouRender = true;

export default Header;
