import React, { ReactNode } from 'react';
import styled from 'styled-components';
import * as Colors from '../../Colors';

// props passed into the styled component
interface StyledButtonProps {
  bgColor?: string;
  color?: string;
  w?: number | string;
  h?: number | string;
  paddingLeft?: string;
  paddingRight?: string;
  marginBottom?: number;
  marginLeft?: number;
  marginTop?: number;
  marginRight?: number;
  hoverColor?: string;
  hoverBgColor?: string;
  hasBorder?: boolean;
  btnType?: 'submit' | 'button';
}

const StyledButton = styled.button<StyledButtonProps>`
  border: ${(props) => (props.hasBorder ? `3px solid ${props.color}` : 0)};
  box-sizing: border-box;
  padding-left: ${(props) => `${props.paddingLeft}`};
  padding-right: ${(props) => `${props.paddingRight}`};
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

interface StyledButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  selected?: boolean;
}

const Button: React.FC<StyledButtonProps> = ({
  children,
  w,
  onClick,
  className,
  bgColor = 'transparent',
  color = Colors.DARK_BLUE,
  h = 50,
  btnType = 'button',
  marginBottom = 0,
  marginLeft = 0,
  marginTop = 0,
  marginRight = 0,
  hoverColor = 'black',
  hoverBgColor = 'transparent',
  hasBorder = true,
  paddingLeft = '0px',
  paddingRight = '0px',
  selected = false,
}) => (
  <StyledButton
    type={btnType}
    onClick={onClick}
    disabled={selected}
    selected={selected}
    className={className}
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
