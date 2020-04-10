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
    display: inline-grid;
    grid-template-columns: ${(props) => props.isMobile ? '1fr' : 'minmax(322px, auto) minmax(600px, auto) auto'};
    grid-template-rows:  ${(props) => props.isMobile ? '1fr 1fr 1fr' : '1fr'};
    justify-content: space-between;
    align-items:center;
    padding-right: ${(props) => props.outsideMargin};
    padding-left: ${(props) => props.outsideMargin};
    background: ${(props) => props.bgColor};
`;


const Input = styled.input<Props>`
  color: #13273E;
  font-family: Lora;
  font-size:${(props) => props.isMobile ? '30px' : '3px'};
  letter-spacing: 0;
  line-height: 36px;
    height:${(props) => props.isMobile ? '90px' : '50px'};
`;

const Headline = styled.h1`
    font-size: 3.125rem;
    letter-spacing: -0.4px;
    text-align:center;
`;



const BottomBanner: React.FC<Props> = ({ isMobile }) => (
    <MainDiv
        className='container'
        isMobile={isMobile}
        outsideMargin={Constants.OUTSIDE_MARGIN} bgColor={Colors.LIGHT_BLUE}>
        <Headline>Stay Connected</Headline>
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
