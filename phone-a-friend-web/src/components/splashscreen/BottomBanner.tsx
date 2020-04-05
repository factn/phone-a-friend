import React from "react";
import styled from "styled-components";
import * as Constants from "../../utils/Constants";
import * as Colors from "../../Colors";
import media from "styled-media-query";
import Button from "../buttons/Button";

interface Iprops {
  outsideMargin: string;
  bgColor: string;
}

const MainDiv = styled.div<Iprops>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: ${(props) => props.outsideMargin};
  padding-left: ${(props) => props.outsideMargin};
  height: 100%;
  background: ${(props) => props.bgColor};
  ${media.lessThan("medium")`
    display:none;
  `}
`;

const Input = styled.input`
  width: 44%;
`;


const BottomBanner = () => {
  return (
    <MainDiv outsideMargin={Constants.OUTSIDE_MARGIN} bgColor={Colors.LIGHT_BLUE}>
      <h2>Stay Connected</h2>
      <Input
        id="namedInput"
        placeholder="Your email address"
        type="text"
        name="email"
      />
      <Button w={184}>Submit</Button>
    </MainDiv>
  );
};

export default BottomBanner;
