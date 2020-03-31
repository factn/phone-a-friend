import React from "react";
import { FaPhone } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  btnCopy: string;
  color: string;
  path: string;
};

const MainDiv = styled.div`
height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.color};
`;

const Button = styled.div`
  border: 2px solid black;
  font-size: 0.8rem;
  padding: 6px;
  width: 142px;
  height: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CallOrReceive: React.FunctionComponent<Props> = ({
  color,
  btnCopy,
  path = "/login"
}) => (
  <MainDiv color={color}>
    <h1>I want to</h1>
    <div>
      <FaPhone />
    </div>
    <Link to={path}>
      <Button role="button">
        {btnCopy}
      </Button>
    </Link>
  </MainDiv>
);

export default CallOrReceive;
