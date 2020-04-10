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

const Container = styled.div<Iprops>`
  width: 100%;
  height: ${(props) => `${props.h}px`};
  white-space: nowrap;
`;
const MainDiv = styled.div<Iprops>`
    height: 100%;
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

const Header:React.FC<Props> = ({ isMobile }) => {
    
  return (
    <Container h={Constants.HEADER_HEIGHT}>
      <MainDiv outsideMargin={Constants.OUTSIDE_MARGIN}>
        <Headline>PhoneAFriend.care</Headline>
       
        {
            !isMobile ?   
            <Nav />
            :
            <HamburgerNav />
        }
      
      </MainDiv>
    </Container>
  );
};

Header.whyDidYouRender = true;

export default Header;
