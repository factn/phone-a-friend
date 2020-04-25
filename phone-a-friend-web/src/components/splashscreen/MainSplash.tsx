import React from 'react';
import styled from 'styled-components';
import MainJumbo from './MainJumbo';
import CallReceiveContainer from './CallReceiveContainer';
import { VOLUNTEER_PATH, USER_PATH } from '../../Paths';

type Props = {
  isMobile: boolean;
};

const MainDiv = styled.main<Props>`
  overflow: scroll;
  display: grid;
  grid-row-gap: 20px;
  grid-template-columns: 1fr;
`;

const MainSplash: React.FC<Props> = ({ isMobile }) => (
  <MainDiv isMobile={isMobile}>
    <CallReceiveContainer
      isMobile={isMobile}
      volunteerProps={{
        copy: 'Take a Call',
        redirect: VOLUNTEER_PATH,
      }}
      userProps={{
        copy: 'Phone a Friend',
        redirect: USER_PATH,
      }}
    />
    <MainJumbo isMobile={isMobile} />
  </MainDiv>
);

export default MainSplash;
