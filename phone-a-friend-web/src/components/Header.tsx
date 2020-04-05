import React from "react";
import styled from "styled-components";
import *  as Constants  from "../utils/Constants";
import Nav from "./Nav";
import HamburgerNav from "./HamburgerNav";
import useWindowWidth from "../hooks/useWindowWidth";

interface Iprops {
  outsideMargin?: string;
  h?:number;
}

const Container = styled.div<Iprops>`
  width: 100%;
  height: ${(props) => `${props.h}px`};
  white-space: nowrap;
`;
const MainDiv = styled.div<Iprops>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: ${(props) => props.outsideMargin};
  margin-right: ${(props) => props.outsideMargin};
`;

const Headline = styled.h1`
    font-size: 1.563rem;
    font-weight: 600;
`;

const Header = () => {
  //const windowWidth = useWindowWidth();
  return (
    <Container h={Constants.HEADER_HEIGHT}>
      <MainDiv outsideMargin={Constants.OUTSIDE_MARGIN}>
        <Headline>PhoneAFriend.care</Headline>
        <Nav h={Constants.HEADER_HEIGHT}/>
      </MainDiv>
    </Container>
  );
};

Header.whyDidYouRender = true;

export default Header;
