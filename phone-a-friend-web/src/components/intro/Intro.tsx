import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import * as Colors from "../../Colors";

interface Iprops {
    readonly bgColor?: string;
    readonly isMobile: boolean;

}

const MainDiv = styled.main<Iprops>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.bgColor};
  padding-left: 71px;
  padding-right: 106px;
  padding-top: 60px;
  padding-bottom: 80px;
  overflow: scroll;
`;

const Wrapper = styled.div<Iprops>`
  display: grid;
  grid-template-columns: ${props => props.isMobile ? '1fr' : '1fr 1fr'};
  /* justify-content: space-between; */
  /* align-items: base-line; */
`;

const Blurb = styled.p<Iprops>`
  font-family: Lora;
  font-size: ${props => props.isMobile ? '2rem' : '1.375rem'};
  line-height: ${props => props.isMobile ? ' 3.25rem' : '2.25rem'};
  margin-bottom: 30px;
`;

const Div50 = styled.div<Iprops>`
  /* width: ${props => props.isMobile ? ' 100%' : '50%'}; */
`;
const DivL = styled(Div50)``;

const DivR = styled(Div50)``;

type Props = {
    bgColor?: string;
    copy: string;
    signUpPath: string;
    isMobile: boolean;
};
//bgColor={Colors.PEACH},

const Intro: React.FC<Props> = ({
    bgColor,
    copy,
    signUpPath, isMobile
}) => {
    return (
        <MainDiv isMobile={isMobile} bgColor={bgColor}>
            <Wrapper isMobile={isMobile}>
                <DivL isMobile={isMobile}>
                    {
                        !isMobile ?
                            <> 
                            <h1>I want to</h1>
                            <h1>{copy}</h1>
                            </>
                            : <h1>I want to {copy}</h1>
                    }
                </DivL>

                <DivR isMobile={isMobile}>
                    <Blurb  isMobile={isMobile}>
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
                </DivR>
            </Wrapper>
        </MainDiv>
    );
};

export default Intro;
