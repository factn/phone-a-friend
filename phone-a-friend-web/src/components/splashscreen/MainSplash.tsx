import React from "react";
import styled from "styled-components";
import CallOrReceive from "./CallOrReceive";
import Heart from "./Heart";
import MainJumbo from "./MainJumbo";
import BottomBanner from "./BottomBanner";
import CallReceiveContainer from './CallReceiveContainer'
import * as Colors from "../../Colors";
import * as Constants from "../../utils/Constants";
import * as Paths from "../../Paths";

type Props = {
    isMobile:boolean;
}

const MainDiv = styled.main<Props>`
    overflow: scroll;
    display: inline-grid;
    grid-template-columns: 1fr;
    grid-template-rows: ${props => props.isMobile ? '1116px 694px 482px' : 'minmax(505px,5fr) minmax(400px,4fr) 150px'};
    align-items: space-between;
`;



const MainSplash: React.FC<Props> = ({ isMobile}) => (
    <MainDiv isMobile={isMobile}>  
        <CallReceiveContainer isMobile={isMobile}/>
        <MainJumbo isMobile={isMobile}/>
        <BottomBanner isMobile={isMobile}/>
    </MainDiv>
);

export default MainSplash;
