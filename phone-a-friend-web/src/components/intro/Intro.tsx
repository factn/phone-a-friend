import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import * as Colors from "../../Colors";


interface Iprops {
    readonly bgColor: string;
  };

const MainDiv = styled.main<Iprops>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.bgColor};
  padding-left:71px;
  padding-right:106px;
  overflow:hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: base-line;
`;


const Blurb = styled.p`
    font-family: Lora;
  font-size: 1.375rem;
  line-height: 2.25rem;
  margin-bottom: 30px;
`;


const Div50 = styled.div`
  width: 50%;
`;
const DivL = styled(Div50)`
`;

const DivR = styled(Div50)`
`;

type Props = {
  bgColor: string;
  copy: string;
  signUpPath: string;
};

const Intro: React.FunctionComponent<Props> = ({ bgColor, copy, signUpPath }) => {
  return (
    <MainDiv bgColor={bgColor}>
        <Wrapper>
            <DivL>
                <h1>I want to</h1>
                <h1>{copy}</h1>
            </DivL>

            <DivR>
                <Blurb>
                Welcome! We’ll need to ask you a few questions before we have someone reach out to you when you’re ready. Please note that we are not offering professional advice, just connecting folks who want to have a chat. For mental health problems, grief counseling or any health-related issues, please talk to your primary care doctor or another health professional who can connect you to the right services.
                </Blurb>
                <Link to={signUpPath}>
                <Button w={224} color={Colors.DARK_BLUE}>Get Started</Button>
                </Link>
            </DivR>
      </Wrapper>
    </MainDiv>
  );
};

export default Intro;
