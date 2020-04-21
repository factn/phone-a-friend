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
  grid-template-rows: ${(props) => (props.isMobile ? '5fr 2fr' : 'minmax(505px,5fr) minmax(400px,4fr)')};
  align-items: space-between;
`;

const MainSplash: React.FC<Props> = ({ isMobile }) => (
  <MainDiv isMobile={isMobile}>
    <CallReceiveContainer isMobile={isMobile} />
    <MainJumbo />
  </MainDiv>
);

export default MainSplash;
