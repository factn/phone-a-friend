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

type Props = {
    isMobile:boolean;
}

const MainDiv = styled.main<Props>`

    overflow: scroll;
    display: grid;
    grid-template-rows: ${props => props.isMobile ? '1116px 558px' : '1fr 1fr 150px'};
    align-items: space-between;
`;

const IwantDiv = styled.div<Props>`
  /* overflow: scroll; */
  position: relative;
  display:flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
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
`;


const MainSplash: React.FC<Props> = ({ isMobile }) => (
    <MainDiv isMobile={isMobile}>
        <IwantDiv isMobile={isMobile}>
            {!isMobile &&
                <HeartDiv top={Constants.HEADER_HEIGHT + 50}>
                    <Heart />
                </HeartDiv>
            }
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
        <MainJumbo isMobile={isMobile}/>
       {!isMobile && <BottomBanner />}
    </MainDiv>
);

export default MainSplash;
