import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";


interface Iprops {
    readonly bgColor: string;
  };

const MainDiv = styled.main<Iprops>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.bgColor};
`;

const Headline = styled.p`
  font-size: 1.8em;
  font-weight: 400;
  margin: 0;
`;
const Blurb = styled.p`
  font-size: 0.8em;
`;


const Div50 = styled.div`
  width: 50%;
`;
const DivL = styled(Div50)`
  margin-left: 44px;
  margin-right: 22px;
`;

const DivR = styled(Div50)`
  margin-left: 22px;
  margin-right: 44px;
`;

type Props = {
  bgColor: string;
  copy: string;
  signUpPath: string;
};

const Intro: React.FunctionComponent<Props> = ({ bgColor, copy, signUpPath }) => {
  return (
    <MainDiv bgColor={bgColor}>
      <DivL>
        <Headline>I want to</Headline>
        <Headline>{copy}</Headline>
      </DivL>

      <DivR>
        <Blurb>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          neque exercitationem doloremque nihil expedita quam non, aut dolore
          nam nisi, reprehenderit perspiciatis? Tenetur officia error nisi
          tempore, commodi maxime eaque?
        </Blurb>
        <Link to={signUpPath}>
          <Button marginBottom={16}>Get Started</Button>
        </Link>
      </DivR>
    </MainDiv>
  );
};

export default Intro;
