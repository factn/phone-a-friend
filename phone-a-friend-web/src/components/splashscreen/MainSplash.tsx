import React from 'react';
import styled from 'styled-components';
import MainJumbo from './MainJumbo';
import CallReceiveContainer from './CallReceiveContainer';

type Props = {
  isMobile: boolean;
};

const MainDiv = styled.main<Props>`
  overflow: scroll;
  display: grid;
  grid-template-columns: 1fr;
  align-items: space-between;
`;

const MainSplash: React.FC<Props> = ({ isMobile }) => (
  <MainDiv isMobile={isMobile}>
    <CallReceiveContainer isMobile={isMobile} />
    <MainJumbo isMobile={isMobile} />
  </MainDiv>
);

export default MainSplash;
