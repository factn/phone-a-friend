import React from "react";
import styled from "styled-components";

interface Iprops {
  h?: number;
}

const MainDiv = styled.div<Props>`
  padding: ${props => props.isMobile ? '0' : '5% 20% 5% 20%'};
  margin-bottom: 24px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const CopyDiv = styled.div<Props>`
  font-family: "Lora";
  font-size: ${props => props.isMobile ? '2rem' : '1.375rem'};
  line-height:${props => props.isMobile ? '3.25rem' : '2.25rem'};
  text-align: center;
  width: ${props => props.isMobile ? null : '894px'};
  padding-left: ${props => props.isMobile ? '5%' : '0'};
  padding-right: ${props => props.isMobile ? '5%' : '0'};
`;

const Disclaimer = styled.div`
  padding-top: 1rem;
  font-family: "Lora";
  font-size: 0.875rem;
`;


const Headline = styled.h1<Props>`
    font-size: ${props => props.isMobile ? '4.688rem' : '4.375rem'};
`;
type Props = {
    isMobile:boolean;
}
const MainJumbo:React.FC<Props> = ({ isMobile }) => (
  <MainDiv isMobile={isMobile}>
    <Headline isMobile={isMobile}>Hi! Let's Connect</Headline>
    <CopyDiv isMobile={isMobile}>
      We understand how important human connection is, especially in times of
      isolation and uncertainty. Whether you want to phone someone for a chat or
      take a call from someone reaching out, PhoneAFriend.care will get you set
      up in no time.
    </CopyDiv>
    <Disclaimer>Note - we do not offer professional advice</Disclaimer>
  </MainDiv>
);
MainJumbo.whyDidYouRender = true;
export default MainJumbo;
