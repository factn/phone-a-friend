import React from "react";
import styled from "styled-components";
import { OUTSIDE_MARGIN } from "../../utils/Constants";
import * as Colors from "../../Colors";
import media from "styled-media-query";
import Button from "../buttons/Button";

interface Iprops {
  outsideMargin?: string;
  bgColor?: string;
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
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  `}
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 8px;
`;

const BottomBanner = () => {
  return (
    <MainDiv outsideMargin={OUTSIDE_MARGIN} bgColor={Colors.LIGHT_BLUE}>
      <h2>Stay Connected</h2>
      <Input
        id="namedInput"
        placeholder="Your email address"
        type="text"
        name="email"
      />
      <Button title="Submit" />
    </MainDiv>
  );
};

export default BottomBanner;
