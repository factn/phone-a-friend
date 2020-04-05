import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LeftHandImage from "../../images/handL.png";
import RightHandImage from "../../images/handR.png";
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
padding-top:10px;
padding-bottom:10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const ImgDiv = styled.div<{ alignSelf: string }>`
padding-top:10px;
padding-bottom:10px;
  align-self: ${(props) => props.alignSelf};
  padding: 1
`;

const CallOrReceive: React.FC<Props> = ({
  bgColor,
  btnCopy,
  path,
  leftHandBool = true,
}) => (
  <MainDiv bgColor={bgColor}>
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
