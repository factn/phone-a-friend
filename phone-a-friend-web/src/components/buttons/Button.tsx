import React, { ReactNode } from "react";
import styled from "styled-components";

// props passed into the styled component
type StyledButtonProps = {
    bgColor: string;
    color: string;
    w: number;
    h: number;
    marginBottom: number;
    marginLeft: number;
    marginTop: number;
    marginRight: number;
    hoverColor: string;
    hoverBgColor: string;
    hasBorder: boolean;

}
interface IButton {
    bgColor?: string;
    color?: string;
    w?: number;
    h?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    hoverColor?: string;
    hoverBgColor?: string;
    hasBorder?: boolean;
    children: ReactNode;
}

const StyledButton = styled.button<IButton>`
  border: ${props => props.hasBorder ? '2px solid black' : 0};
  font-size: 0.8rem;
  margin-bottom: ${props => `${props.marginBottom}px`};
  width: ${props => `${props.w}px`};
  height: ${props => `${props.h}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  background: ${props => props.bgColor};
  cursor: pointer;
  :hover {
        background: ${props => props.hoverBgColor};
        color:  ${props => props.hoverColor};
    }
`;

const Button: React.FC<IButton> = ({ children,
    bgColor = 'transparent',
    color = 'black',
    w = 142,
    h = 35,
    marginBottom = 0, marginLeft = 0, marginTop = 0, marginRight = 0,
    hoverColor = 'black', hoverBgColor = 'transparent',
    hasBorder = true,
}) => (
        <StyledButton type="button"
            bgColor={bgColor} color={color}
            hoverColor={hoverColor} hoverBgColor={hoverBgColor}
            w={w} h={h}
            marginBottom={marginBottom}
            hasBorder={hasBorder}>
            {children}
        </StyledButton>
    );

export default Button;
