import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RightHandImage from "../../images/takecall_icon.svg";
import LeftHandImage from '../../images/phonefriend_icon.svg'
import Button from "../buttons/Button";

type Props = {
    btnCopy: string;
    path: string;
    leftHandBool?: boolean;
    isMobile: boolean;
};

interface IProps {
    readonly isMobile: boolean;
    readonly leftHandBool: boolean;
}
//background-image: ${(props) => props.isMobile ? url("../../images/heart.svg")
const MainDiv = styled.div<IProps>`
    
    /* justify-self: ${(props) => props.leftHandBool ? 'end' : 'start'}; */
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
`;

const ImgDiv = styled.div`
    margin-top:50px;
    margin-bottom:50px;
`;

const CallOrReceive: React.FC<Props> = ({
    btnCopy,
    path,
    leftHandBool = true,
    isMobile
}) => (
        <MainDiv 
            isMobile={isMobile} 
            leftHandBool={leftHandBool}  
            className={
                (isMobile && leftHandBool) ? 'mobile-bg-top' : 
                (isMobile && !leftHandBool) ?'mobile-bg-bottom' : ''}
        >
            
                    
            <h2>I want to</h2>
            <ImgDiv>
                {leftHandBool ? (
                    <img src={LeftHandImage} alt="hand" />
                ) : (
                        <img src={RightHandImage} alt="hand" />
                    )}
            </ImgDiv>
            <Link to={path}>
                <Button marginBottom={16} w={isMobile ? '96vw' : 256}>{btnCopy}</Button>
            </Link>
        </MainDiv>
    );

export default CallOrReceive;
