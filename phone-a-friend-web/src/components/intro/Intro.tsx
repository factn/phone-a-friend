import React from 'react'
import styled from 'styled-components';



const MainDiv = styled.main`
width: 100%;
height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${props => props.color};
`;

const Headline = styled.p`
    font-size: 1.8em;
    font-weight: 400;
    margin: 0;
`;
const Blurb = styled.p`
    font-size: .8em;
`;
const Button = styled.div`
    border: 2px solid black;
    font-size: .8rem;
    padding: 6px;
    width: 142px;
    height: 11px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    cursor: pointer;
`;

const Div50 = styled.div`
   width: 50%;
`;
const DivL = styled(Div50)`
    margin-left:44px;
    margin-right:22px;
`;

const DivR = styled(Div50)`
    margin-left:22px;
    margin-right:44px;
`;

type Props = {
    color: string;
    copy: string;
}

const Intro: React.FunctionComponent<Props> = ({ color, copy }) => {
    return (
        <MainDiv color={color}>
            <DivL>
            <Headline>I want to</Headline>
                <Headline>{copy}</Headline>
            </DivL>

            <DivR>
                <Blurb>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis neque exercitationem doloremque nihil expedita quam non, aut dolore nam nisi, reprehenderit perspiciatis? Tenetur officia error nisi tempore, commodi
                maxime eaque?
                </Blurb>
                <Button role='button'>Get Started</Button>
            </DivR>

        </MainDiv>
    )
}

export default Intro;
