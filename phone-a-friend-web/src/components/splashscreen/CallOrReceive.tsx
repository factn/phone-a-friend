import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RightHandImage from '../../images/takecall_icon.svg';
import LeftHandImage from '../../images/phonefriend_icon.svg';
import Button from '../buttons/Button';


type Props = {
  btnCopy: string;
  path: string;
  leftHandBool?: boolean;
  isMobile: boolean;
};

interface MainDivProps {
  readonly isMobile: boolean;
  readonly leftHandBool: boolean;
  className?: string;
}

const MainDiv = styled.div<MainDivProps>`
  justify-self: ${(props) => (!props.isMobile ? (props.leftHandBool ? 'end' : 'start') : 'stretch')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 30px;
`;

const ImgDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
`;

const SmallerHeadLine = styled.h2<{isMobile: boolean}>`
  font-size: ${props => props.isMobile ? '1.563rem' : '2.5rem'};
  font-weight: 600;
  letter-spacing: -2.5rem;
  text-align: center;
  letter-spacing: -0.4px;
  `;

const CallOrReceive: React.FC<Props> = ({ btnCopy, path, leftHandBool = true, isMobile }) => (
  <MainDiv
    isMobile={isMobile}
    leftHandBool={leftHandBool}
    className={isMobile && leftHandBool ? 'mobile-bg-top' : isMobile && !leftHandBool ? 'mobile-bg-bottom' : ''}
  >
    <SmallerHeadLine isMobile={isMobile}>I want to</SmallerHeadLine>
    <ImgDiv>{leftHandBool ? <img src={LeftHandImage} alt="hand" /> : <img src={RightHandImage} alt="hand" />}</ImgDiv>
    <Link to={path}>
      <Button className={isMobile ? 'mobile-splash-intro-button' : 'splash-intro-button'}>{btnCopy}</Button>
    </Link>
  </MainDiv>
);

export default CallOrReceive;
