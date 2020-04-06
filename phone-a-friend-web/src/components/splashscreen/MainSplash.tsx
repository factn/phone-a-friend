import React from "react";
import styled from "styled-components";
import CallOrReceive from "./CallOrReceive";
import Heart from "./Heart";
import MainJumbo from "./MainJumbo";
import BottomBanner from "./BottomBanner";
import * as Colors from "../../Colors";
import * as Constants from "../../utils/Constants";
import { USER_PATH, VOLUNTEER_PATH } from "../../Paths";
import media from "styled-media-query";

const MainDiv = styled.main`
  width: 100%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IwantDiv = styled.div`
  /* overflow: scroll; */
  position: relative;
  ${media.greaterThan("medium")`
    display:flex;
    flex-direction: row;
  `}
`;

type Iprops = {
  top: number;
};
const HeartDiv = styled.div<Iprops>`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  top: ${(props) => `${props.top}px`};
  ${media.lessThan("medium")`
        display:none;
    `}
`;

const MainSplash: React.FunctionComponent = () => (
  <MainDiv>
    <div>
      <IwantDiv>
        <HeartDiv top={Constants.HEADER_HEIGHT + 50}>
          <Heart />
        </HeartDiv>
        <CallOrReceive
          h={Constants.SPLASH_IWANT}
          bgColor={Colors.PEACH}
          btnCopy="Phone a Friend"
          path={USER_PATH}
        />
        <CallOrReceive
          h={Constants.SPLASH_IWANT}
          bgColor={Colors.LAVENDER}
          btnCopy="Take a Call"
          path={VOLUNTEER_PATH}
          leftHandBool={false}
        />
      </IwantDiv>
      <MainJumbo />
    </div>
    <BottomBanner />
  </MainDiv>
);

export default MainSplash;
