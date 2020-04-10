import React, { ReactNode } from "react";
import styled from "styled-components";
import * as Colors from "../../Colors";

// props passed into the styled component
type StyledButtonProps = {
  bgColor: string;
  color: string;
  w: number | string;
  h: number| string;
  paddingRight: number;
  paddingLeft: number;
  marginBottom: number;
  marginLeft: number;
  marginTop: number;
  marginRight: number;
  hoverColor: string;
  hoverBgColor: string;
  hasBorder: boolean;
};
interface IButton {
  bgColor?: string;
  color?: string;
  w?: number | string;
  h?: number| string;
  paddingLeft?: number;
  paddingRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginTop?: number;
  marginRight?: number;
  hoverColor?: string;
  hoverBgColor?: string;
  hasBorder?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<IButton>`
  border: ${(props) => (props.hasBorder ? `3px solid ${props.color}` : 0)};
  box-sizing: border-box;
  font-size: 1.125rem;
  font-weight: 600;
  padding-left: ${(props) => `${props.paddingLeft}px`};
  padding-right: ${(props) =>`${props.paddingRight}px`};
  margin-top: ${(props) =>`${props.marginTop}px`};
  margin-bottom: ${(props) =>`${props.marginBottom}px`};
  margin-left: ${(props) => `${props.marginLeft}px`};
  margin-right: ${(props) => `${props.marginRight}px`};
  width: ${(props) => (typeof props.w) ==='number' ? `${props.w}px` : props.w};
  height: ${(props) => (typeof props.h) ==='number' ? `${props.h}px` : props.h};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  cursor: pointer;
  :hover {
    background: ${(props) => props.hoverBgColor};
    color: ${(props) => props.hoverColor};
  }
`;

const Button: React.FC<IButton> = ({
  children,
  bgColor = "transparent",
  color = Colors.DARK_BLUE,
  w = 256,
  h = 50,
  onClick,
  marginBottom = 0,
  marginLeft = 0,
  marginTop = 0,
  marginRight = 0,
  hoverColor = "black",
  hoverBgColor = "transparent",
  hasBorder = true,
  paddingLeft=0,
  paddingRight=0
}) => (
  <StyledButton
    type="button"
    onClick={onClick}
    bgColor={bgColor}
    color={color}
    hoverColor={hoverColor}
    hoverBgColor={hoverBgColor}
    w={w}
    h={h}
    marginBottom={marginBottom}
    marginTop={marginTop}
    marginLeft={marginLeft}
    hasBorder={hasBorder}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
  >
    {children}
  </StyledButton>
);

export default Button;
