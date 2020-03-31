import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LeftHandImage from '../../images/handL.png'
import RightHandImage from '../../images/handR.png'

type Props = {
    btnCopy: string;
    color: string;
    path: string;
    leftHandBool?: boolean;
};

interface IProps {
    readonly color: string;
}

const MainDiv = styled.div<IProps>`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.color};
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

type ImgProps = {
    leftHandBool: boolean
}
const ImgDiv = styled.div<ImgProps>`
    align-self: ${props => props.leftHandBool ? 'flex-end' : 'flex-start'};
`;

const CallOrReceive: React.FC<Props> = ({
    color,
    btnCopy,
    path = "/login",
    leftHandBool = true
}) => (
        <MainDiv color={color}>
            <h1>I want to</h1>
            <ImgDiv leftHandBool={leftHandBool}>
                {leftHandBool ?
                    <img src={LeftHandImage} alt="hand" />
                    :
                    <img src={RightHandImage} alt="hand" />
                }
            </ImgDiv>
            <Link to={path}>
                <Button role="button">
                    {btnCopy}
                </Button>
            </Link>
        </MainDiv>
    );

export default CallOrReceive;
