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
/* // ${(props) => props.isMobile ? 'column' : 'row'}; */
    align-items: center;
    width: 100%;
    padding: 60px 0 60px 0;
    /* padding-top:30px;
    padding-bottom:50px;
  width: 100%;
  display: grid;
  grid-template-columns: 40px  auto 40px;
  align-items: center; */
  /* flex-direction: column;
  justify-content: space-around;
  align-items: center; */
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
