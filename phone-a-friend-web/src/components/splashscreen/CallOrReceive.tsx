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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const ImgDiv = styled.div<{ alignSelf: string }>`
  align-self: ${(props) => props.alignSelf};
`;

const CallOrReceive: React.FC<Props> = ({
  bgColor,
  btnCopy,
  path,
  leftHandBool = true,
}) => (
  <MainDiv bgColor={bgColor}>
    <h1>I want to</h1>
    <ImgDiv alignSelf={leftHandBool ? "flex-end" : "flex-start"}>
      {leftHandBool ? (
        <img src={LeftHandImage} alt="hand" />
      ) : (
        <img src={RightHandImage} alt="hand" />
      )}
    </ImgDiv>
    <Link to={path}>
      <Button title={btnCopy} />
    </Link>
  </MainDiv>
);

export default CallOrReceive;
