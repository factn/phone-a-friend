import React from "react";
import styled from "styled-components";
import * as Constants from "../../utils/Constants";
import * as Colors from "../../Colors";
import Button from "../buttons/Button";

type Props = {
    isMobile: boolean;
}

interface Iprops {
    outsideMargin: string;
    bgColor: string;
    isMobile: boolean;
}



const MainDiv = styled.div<Iprops>`
    display: flex;
    flex-direction: ${(props) => props.isMobile ? 'column' : 'row'};
    justify-content: ${(props) => props.isMobile ? 'start' : 'space-between'};
    align-items: center;
    padding-right: ${(props) => props.outsideMargin};
    padding-left: ${(props) => props.outsideMargin};
    height: 100%;
    background: ${(props) => props.bgColor};
    padding-top: 50px;
    padding-bottom: 50px;
`;


const Input = styled.input<Props>`
    font-family: "Lora";
    font-size: 1.875;
    height:${(props) => props.isMobile ? '90px' : '50px'};
    width:  ${(props) => props.isMobile ? '100%' : '44%'}; 
    margin-top: 50px;
    margin-bottom: 50px;
`;


const BottomBanner: React.FC<Props> = ({ isMobile }) => (
    <MainDiv
        isMobile={isMobile}
        outsideMargin={Constants.OUTSIDE_MARGIN} bgColor={Colors.LIGHT_BLUE}>
        <h2>Stay Connected</h2>
        <Input
            isMobile={isMobile}
            id="namedInput"
            placeholder="Email address"
            type="text"
            name="email"
        />
        <Button w={isMobile ? '100%' : 184}>Submit</Button>
    </MainDiv>
);


export default BottomBanner;
