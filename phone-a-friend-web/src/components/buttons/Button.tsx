import React, { ReactNode } from 'react';
import styled from 'styled-components';
import * as Colors from '../../Colors';


// props passed into the styled component
interface StyledButtonProps {
  bgColor?: string;
  color?: string;
  w?: number | string;
  h?: number | string;
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  selected?: boolean;
  ref?: HTMLButtonElement;
  btnType?: 'submit' | 'button';
}

const StyledButton = styled.button<StyledButtonProps>`
  border: ${(props) => (props.hasBorder ? `3px solid ${props.color}` : 0)};
  box-sizing: border-box;
  padding-left: ${(props) => `${props.paddingLeft}px`};
  padding-right: ${(props) => `${props.paddingRight}px`};
  margin-top: ${(props) => `${props.marginTop}px`};
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  margin-left: ${(props) => `${props.marginLeft}px`};
  margin-right: ${(props) => `${props.marginRight}px`};
  width: ${(props) => (typeof props.w === 'number' ? `${props.w}px` : props.w)};
  height: ${(props) => (typeof props.h === 'number' ? `${props.h}px` : props.h)};
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.selected && props.hoverColor};
  background: ${(props) => props.selected && props.hoverBgColor};
  cursor: pointer;
  :hover {
    background: ${(props) => props.hoverBgColor};
    color: ${(props) => props.hoverColor};
  }
`;

const Button: React.FC<StyledButtonProps> = ({
  children,
  bgColor = 'transparent',
  color = Colors.DARK_BLUE,
  w,
  h = 50,
  onClick,
  marginBottom = 0,
  marginLeft = 0,
  marginTop = 0,
  marginRight = 0,
  hoverColor = 'black',
  hoverBgColor = 'transparent',
  hasBorder = true,
  paddingLeft = 0,
  paddingRight = 0,
  className,
  selected = false,
  btnType = 'button'
}) => (
  <StyledButton
    type={btnType}
    onClick={onClick}
    disabled={selected}
    selected={selected}
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
    className={className}
  >
    {children}
  </StyledButton>
);

export default Button;
