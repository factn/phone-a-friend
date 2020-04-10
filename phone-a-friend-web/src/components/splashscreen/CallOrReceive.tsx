import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import RightHandImage from "../../images/takecall_icon.svg";
import LeftHandImage from '../../images/phonefriend_icon.svg'
import Button from "../buttons/Button";

type Props = {
  btnCopy: string;
  bgColor: string;
  path: string;
  leftHandBool?: boolean;
    isMobile:boolean;
};

interface IProps {
  readonly bgColor: string;
  readonly isMobile:boolean;
}

const MainDiv = styled.div<IProps>`
    display: flex;
    flex-direction:column;
    align-items: center;
    width: 100%;
    padding: ${(props) => props.isMobile ? '30px 0 50px' : '60px 0 60px'};
    background-color: ${(props) => props.bgColor};
`;

const ImgDiv = styled.div`
    margin-top:50px;
    margin-bottom:50px;
`;

const CallOrReceive: React.FC<Props> = ({
  bgColor,
  btnCopy,
  path,
  leftHandBool = true, 
  isMobile
}) => (
  <MainDiv bgColor={bgColor} isMobile={isMobile} >
    <h2>I want to</h2>
    <ImgDiv>
      {leftHandBool ? (
        <img src={LeftHandImage} alt="hand" />
      ) : (
        <img src={RightHandImage} alt="hand" />
      )}
    </ImgDiv>
    <Link to={path}>
      <Button marginBottom={16} w={isMobile ? '96vw' : 256}>{btnCopy}</Button>
    </Link>
  </MainDiv>
);

export default CallOrReceive;
