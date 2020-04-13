import React from 'react';
import styled from 'styled-components';
import CallOrReceive from './CallOrReceive';
import Heart from './Heart';
import * as Colors from '../../Colors';
import * as Paths from '../../Paths';

interface Imain {
  bgColorLeftTop: string;
  bgColorRightBottom: string;
  rotation: string;
  isMobile: boolean;
}

const MainDiv = styled.div<Imain>`
  display: grid;
  grid-template-columns: ${(props) => (props.isMobile ? '1fr' : '1fr 1fr 1fr')};
  grid-template-rows: ${(props) => (props.isMobile ? '1fr 1fr' : '1fr')};
  background-image: ${(props) =>
    `linear-gradient(${props.rotation}, ${props.bgColorLeftTop} 50%, ${props.bgColorRightBottom} 50%)`};
`;

type Props = {
  isMobile: boolean;
};
const CallReceiveContainer: React.FC<Props> = ({ isMobile }) => {
  return (
    <MainDiv
      rotation={isMobile ? '180deg' : '90deg'}
      bgColorLeftTop={Colors.PEACH}
      bgColorRightBottom={Colors.LAVENDER}
      isMobile={isMobile}
    >
      <CallOrReceive btnCopy="Phone a Friend" path={Paths.USER_PATH} isMobile={isMobile} />
      {!isMobile && <Heart />}
      <CallOrReceive btnCopy="Take a Call" path={Paths.VOLUNTEER_PATH} leftHandBool={false} isMobile={isMobile} />
    </MainDiv>
  );
};

export default CallReceiveContainer;
