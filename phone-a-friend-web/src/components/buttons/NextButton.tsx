import React from "react";
import styled from "styled-components";
import { ReactComponent as NextArrow } from "../../components/icons/NextArrow.svg";

const NextContainer = styled.button`
  float: right;
  margin-top: 10px;
  display: flex;
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  align-items: center;
  cursor: pointer;
  span {
    position: relative;
    left: 8px;
  }
`;

type NextButtonProps = {
  onClick: () => void;
  title: string;
};

const NextButton: React.FC<NextButtonProps> = ({ onClick, title }) => {
  return (
    <NextContainer type="submit" onClick={onClick}>
      <span>{title}</span>
      <NextArrow height={20} />
    </NextContainer>
  );
};

export default NextButton;
