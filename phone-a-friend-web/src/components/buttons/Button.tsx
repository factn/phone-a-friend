import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid black;
  font-size: 0.8rem;
  margin-bottom: 16px;
  width: 142px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC = ({ children }) => {
  return (
    <StyledButton type="button">
      {children}
    </StyledButton>
  );
};

export default Button;
