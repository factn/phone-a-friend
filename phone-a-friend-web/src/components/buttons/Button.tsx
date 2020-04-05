import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid black;
  font-size: 0.8rem;
  margin-bottom: 16px;
  padding: 16px;
  width: 142px;
  height: 11px;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  return (
    <StyledButton {...buttonProps} role="button">
      {buttonProps.title}
    </StyledButton>
  );
};

export default Button;
