import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import * as Colors from "../../Colors";
import * as Constants from '../../utils/Constants'

interface Iprops {
    readonly bgColor?: string;
    readonly color?: string;
    readonly isMobile: boolean;
}

const MainDiv = styled.main<Iprops>`
    min-width: ${props => props.isMobile ? 0 : '1160px'};
    margin-bottom:  ${props => props.isMobile ? '90px' : '70px'};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.bgColor};
  padding-left: ${props => props.isMobile ? '40px' : '5%'};
  padding-right:${props => props.isMobile ? '40px' : '5%'};
  padding-top: ${props => props.isMobile ? '60px' : '0'};
  padding-bottom: ${props => props.isMobile ? '80px' : '0'};
  overflow: scroll;
  border: 1px solid black;
`;

const Wrapper = styled.div<Iprops>`
  display: grid;
  grid-template-columns: ${props => props.isMobile ? '1fr' : '1fr 1fr'};
  color: ${props => props.color};
`;


const HeadLine = styled.div<Iprops>`
    font-size: ${props => props.isMobile ?  '4.688rem' : '4.375rem'};
    line-height: ${props => props.isMobile ?  '5.625rem' : '4.125rem'};
    padding-bottom:${props => props.isMobile ? '40px' : '0'};
`;

const Blurb = styled.div<Iprops>`
  font-family: Lora;
  font-size: ${props => props.isMobile ? '2rem' : '1.375rem'};
  line-height: ${props => props.isMobile ? ' 3.25rem' : '2.25rem'};
  margin-bottom: 30px;
  max-width:565px;
`;

type Props = {
    bgColor?: string;
    copy: string;
    signUpPath: string;
    isMobile: boolean;
};


const Intro: React.FC<Props> = ({
    bgColor,
    copy,
    signUpPath, isMobile
}) => {
    return (
        <MainDiv isMobile={isMobile} bgColor={bgColor}>
            <Wrapper isMobile={isMobile} color={Colors.DARK_BLUE}>
                <HeadLine isMobile={isMobile}>
                    {
                        !isMobile ?
                            <> 
                            <h1>I want to</h1>
                            <h1>{copy}</h1>
                            </>
                            : <h1>I want to {copy}</h1>
                    }
                </HeadLine>

                <div>
                    <Blurb  isMobile={isMobile} color={Colors.DARK_BLUE}>
                        Welcome! We’ll need to ask you a few questions before we have
                        someone reach out to you when you’re ready. Please note that we are
                        not offering professional advice, just connecting folks who want to
                        have a chat. For mental health problems, grief counseling or any
                        health-related issues, please talk to your primary care doctor or
                        another health professional who can connect you to the right
                        services.
                    </Blurb>
                    <Link to={signUpPath}>
                        <Button w={isMobile ? '100%' : 224} color={Colors.DARK_BLUE}>
                            Get Started
                        </Button>
                    </Link>
                </div>
            </Wrapper>
        </MainDiv>
    );
};

export default Intro;
