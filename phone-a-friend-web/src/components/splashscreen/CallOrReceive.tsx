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
};

interface IProps {
  readonly bgColor: string;
}

const MainDiv = styled.div<IProps>`

padding-top:30px;
padding-bottom:50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
}) => (
  <MainDiv bgColor={bgColor} >
    <h2>I want to</h2>
    <ImgDiv>
      {leftHandBool ? (
        <img src={LeftHandImage} alt="hand" />
      ) : (
        <img src={RightHandImage} alt="hand" />
      )}
    </ImgDiv>
    <Link to={path}>
      <Button marginBottom={16}>{btnCopy}</Button>
    </Link>
  </MainDiv>
);

export default CallOrReceive;
