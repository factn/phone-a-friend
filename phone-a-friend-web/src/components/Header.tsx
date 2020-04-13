import React from "react";
import styled from "styled-components";
import Media  from "../utils/CustomMedia";
import * as Constants  from '../utils/Constants';
import Nav from "./Nav";
import HamburgerNav from './HamburgerNav'

interface Iprops {
  outsideMargin?: string;
  h?: number;
}


const MainDiv = styled.div<Iprops>`
white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: ${(props) => props.outsideMargin};
  margin-right: ${(props) => props.outsideMargin};
`;

const Headline = styled.h1`
  font-weight: 600;
  ${Media.greaterThan('mobile')`
    font-size: 1.563rem;
  `}
  ${Media.lessThan('mobile')`
    font-size:2.125rem;
  `}
`;
type Props = {
    isMobile:boolean;
}

const Header:React.FC<Props> = ({ isMobile }) => (
      <MainDiv outsideMargin={Constants.OUTSIDE_MARGIN}>
        <Headline>PhoneAFriend.care</Headline>  
        {
            !isMobile ?   
            <Nav />
            :
            <HamburgerNav />
        }
      </MainDiv>
  );

Header.whyDidYouRender = true;

export default Header;
