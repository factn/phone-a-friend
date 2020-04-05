import React from "react";
import styled from "styled-components";
import CallOrReceive from "./CallOrReceive";
import MainJumbo from "./MainJumbo";
import BottomBanner from "./BottomBanner";
import * as Colors from "../../Colors";
import { USER_PATH, VOLUNTEER_PATH } from "../../Paths";
import media from "styled-media-query";

const MainDiv = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IwantDiv = styled.div`
  overflow: hidden;
  ${media.greaterThan("medium")`
    display:flex;
    flex-direction: row;
  `}
`;

const MainSplash: React.FunctionComponent = () => (
    <MainDiv>
        <div>
            <IwantDiv>
                <CallOrReceive
                    bgColor={Colors.PEACH}
                    btnCopy="Phone a Friend"
                    path={USER_PATH}
                />
                <CallOrReceive
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
