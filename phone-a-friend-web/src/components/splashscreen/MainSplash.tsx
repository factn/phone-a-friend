import React from "react";
import styled from "styled-components";
import CallOrReceive from "./CallOrReceive";
import Heart from "./Heart";
import MainJumbo from "./MainJumbo";
import BottomBanner from "./BottomBanner";
import * as Colors from "../../Colors";
import * as Constants from "../../utils/Constants";
import * as Paths from "../../Paths";

type Props = {
    isMobile:boolean;
    outsideMargin?:string;
}

const MainDiv = styled.main<Props>`
    
    overflow: scroll;
    display: inline-grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${props => props.isMobile ? 'auto 657px 150px' : '1fr 1fr 150px'};
    align-items: space-between;
    & > div {
        justify-self:  stretch;
    }
    /* justify-items: start; */
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


const MainSplash: React.FC<Props> = ({ isMobile}) => (
    <MainDiv 
        isMobile={isMobile}
        outsideMargin={Constants.OUTSIDE_MARGIN}>  
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
                isMobile={isMobile}
            />
            <CallOrReceive
                bgColor={Colors.LAVENDER}
                btnCopy="Take a Call"
                path={Paths.VOLUNTEER_PATH}
                leftHandBool={false}
                isMobile={isMobile}
            />
        </IwantDiv>
        <MainJumbo isMobile={isMobile}/>
        <BottomBanner isMobile={isMobile}/>
    </MainDiv>
);

export default MainSplash;
