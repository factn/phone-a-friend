import React from 'react';
import Nav from './Nav'
import styled from 'styled-components';

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 96%;
    margin: 0 40px 0 40px;
`;

const Headline = styled.h1`
    font-size: 1rem;
`;

const Header = () => (
    <MainDiv>
        <Headline>PhoneAFriend.care</Headline>
        <Nav />
    </MainDiv>
)

export default Header;
