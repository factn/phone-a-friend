import React from 'react';
import styled from 'styled-components';
import Media from '../../utils/CustomMedia';

const MainDiv = styled.div`
  overflow: scroll;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
  align-content: space-around;
  justify-items: center;
  ${Media.lessThan('mobile')`
    padding: 35px 0 35px 0;
  `}
`;
const CopyDiv = styled.p`
  font-family: 'Lora';
  ${Media.greaterThan('mobile')`
    font-size:1.375rem;
    line-height: 2.25rem;
    margin: 0 20%;
  `}
  ${Media.lessThan('mobile')`
    font-size: 1rem;
    line-height: 1.625rem;
    margin: 0 2.5rem;
  `}
  text-align: center;
  max-width: 894px;
  text-align: center;
`;

const Disclaimer = styled.p`
  font-family: 'Lora';
  font-size: 0.875rem;
  text-align: center;
`;

interface ClassI {
  className?: string;
}

interface IsMobileProp {
  isMobile: boolean;
}

const Headline = styled.h1`
  text-align: center;
`;

type Props = {
  isMobile: boolean;
};

//className={`bold center-text ${!isMobile ? 'font-headline' : 'font-mobile-headline'}`}
const MainJumbo: React.FC<Props> = ({ isMobile }) => (
  <MainDiv>
    <Headline className={!isMobile ? 'font-headline' : 'font-mobile-headline'}>Hi! Let&apos;s Connect</Headline>
    <CopyDiv>
      We understand how important human connection is, especially in times of isolation and uncertainty. Whether you
      want to phone someone for a chat or take a call from someone reaching out, PhoneAFriend.care will get you set up
      in no time.
    </CopyDiv>
    <Disclaimer>Note: We do not offer professional advice</Disclaimer>
  </MainDiv>
);
MainJumbo.whyDidYouRender = true;
export default MainJumbo;
