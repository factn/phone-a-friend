import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import CallOrReceive from "./CallOrReceive";
import Heart from "./Heart";
import MainJumbo from "./MainJumbo";
import BottomBanner from "./BottomBanner";
import * as Colors from "../../Colors";
import * as Constants from "../../utils/Constants";
import * as Paths from "../../Paths";

const MainDiv = styled.main`
    height: 100%;
    overflow: scroll;
    display: grid;
    grid-template-rows: 1fr 1fr 150px;
    align-items: space-between;
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
        <IwantDiv>
            <HeartDiv top={Constants.HEADER_HEIGHT + 50}>
                <Heart />
            </HeartDiv>
            <CallOrReceive
                bgColor={Colors.PEACH}
                btnCopy="Phone a Friend"
                path={Paths.USER_PATH}
            />
            <CallOrReceive
                bgColor={Colors.LAVENDER}
                btnCopy="Take a Call"
                path={Paths.VOLUNTEER_PATH}
                leftHandBool={false}
            />
        </IwantDiv>
        <MainJumbo />
        <BottomBanner />
    </MainDiv>
);

export default MainSplash;
