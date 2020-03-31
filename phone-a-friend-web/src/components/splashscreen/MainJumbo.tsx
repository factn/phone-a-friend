import React from 'react'
import styled from 'styled-components';


const MainDiv = styled.div`
    height: 100%;
    padding: 0 20% 0 20%;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const CopyDiv = styled.p`
    font-size: .8rem;
`;
const HeadLine = styled.h1`
    font-size: 3.4rem;
`;

const Disclaimer = styled.p`
    font-size: .5rem;
`;

const MainJumbo = () => {
    return (
        <MainDiv>
            <HeadLine>Hi! Let's Connect</HeadLine>
            <CopyDiv>We understand how important human connection is, especially in times
            of isolation and uncertainty. Whether you want to phone someone for a chat
            or take a call from someone reaching out, PhoneAFriend.care will get you set useImperativeHandle(
            in no time.
            </CopyDiv>
            <Disclaimer>Note - we do not offer professional advice</Disclaimer>
        </MainDiv>
    )
}

export default MainJumbo
