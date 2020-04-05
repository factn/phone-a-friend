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
  h: number;
};

interface IProps {
  readonly bgColor: string;
  readonly h: number;
}

const MainDiv = styled.div<IProps>`
padding-top:10px;
padding-bottom:10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  height: ${(props) => `${props.h}px`};
`;

const ImgDiv = styled.div<{ alignSelf: string }>`
/* padding-top:10px;
padding-bottom:10px;
  align-self: ${(props) => props.alignSelf};
  padding: 1; */
`;

const CallOrReceive: React.FC<Props> = ({
  bgColor,
  btnCopy,
  path,
  h,
  leftHandBool = true,
}) => (
  <MainDiv bgColor={bgColor} h={h} >
    <h2>I want to</h2>
    <ImgDiv alignSelf={leftHandBool ? "flex-end" : "flex-start"}>
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
