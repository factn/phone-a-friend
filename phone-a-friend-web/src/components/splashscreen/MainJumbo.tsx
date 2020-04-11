import React from "react";
import styled from "styled-components";

const MainDiv = styled.div<Props>`
  padding: ${props => props.isMobile ? '0 2.5rem' : '0 20%'};
  overflow: scroll;
  display: inline-grid;
  gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 2fr 1fr;
  justify-content:space-between;
  justify-items:center;
  align-items: center;
`;
const CopyDiv = styled.div<Props>`
  font-family: "Lora";
  font-size: ${props => props.isMobile ? '2rem' : '1.375rem'};
  line-height:${props => props.isMobile ? '3.25rem' : '2.25rem'};
  text-align: center;
  max-width: 894px;
`;

const Disclaimer = styled.div`
  font-family: "Lora";
  font-size: 0.875rem;
  text-align: center;
`;


const Headline = styled.h1<Props>`
  text-align: center;
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
