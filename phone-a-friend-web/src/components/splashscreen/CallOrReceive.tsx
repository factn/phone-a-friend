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
  classname: ${(props) => props.className};
`;

const ImgDiv = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const CallOrReceive: React.FC<Props> = ({ btnCopy, path, leftHandBool = true, isMobile }) => (
  <MainDiv
    isMobile={isMobile}
    leftHandBool={leftHandBool}
    className={isMobile && leftHandBool ? 'mobile-bg-top' : isMobile && !leftHandBool ? 'mobile-bg-bottom' : ''}
  >
    <h2>I want to</h2>
    <ImgDiv>{leftHandBool ? <img src={LeftHandImage} alt="hand" /> : <img src={RightHandImage} alt="hand" />}</ImgDiv>
    <Link to={path}>
      <Button className={isMobile ? 'mobile-splash-intro-button' : 'splash-intro-button'}>{btnCopy}</Button>
    </Link>
  </MainDiv>
);

export default CallOrReceive;
