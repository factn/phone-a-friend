import React from "react";
import styled from "styled-components";
import * as Constants from "../../utils/Constants";
import * as Colors from "../../Colors";
import Button from "../buttons/Button";

type Props = {
    isMobile: boolean;
}

interface Iprops {
    outsideMargin: number;
    bgColor: string;
    isMobile: boolean;
}



const MainDiv = styled.div<Iprops>`
    display: inline-grid;
    grid-template-columns: ${(props) => props.isMobile ? '1fr' : 'minmax(322px, auto) minmax(600px, auto) auto'};
    grid-template-rows:  ${(props) => props.isMobile ? '1fr 1fr 1fr' : '1fr'};
    justify-items: center;
    align-items:center;
    /* justify-content: space-between;
    align-items:center; */
    padding-right: ${(props) => props.isMobile ? `${props.outsideMargin}px` : 0};
    padding-left: ${(props) => props.isMobile ?  `${props.outsideMargin}px` : 0};
    background: ${(props) => props.bgColor};
`;


const Input = styled.input<Props>`
  color: #13273E;
  font-family: Lora;
  font-size:${(props) => props.isMobile ? '30px' : '22px'};
  letter-spacing: 0;
  line-height: 36px;
    height:${(props) => props.isMobile ? '90px' : '50px'};
    width: 100%;
`;

const Headline = styled.h1`
    font-size: 3.125rem;
    letter-spacing: -0.4px;
    text-align:center;
`;




const BottomBanner: React.FC<Props> = ({ isMobile }) => (
    <MainDiv
        isMobile={isMobile}
        outsideMargin={Constants.OUTSIDE_MOBILE_MARGIN_PIXELS}
        bgColor={Colors.LIGHT_BLUE}>
        <Headline>Stay Connected</Headline>
        <Input
                isMobile={isMobile}
                id="namedInput"
                placeholder="Email address"
                type="text"
                name="email"
        />
         <Button 
            className = {isMobile ? 'mobile-splash-intro-button' : 'splash-intro-button'}
        >
                 Submit
        </Button>
    </MainDiv>
);


export default BottomBanner;
