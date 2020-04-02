import React from 'react';
import Nav from './Nav'
import styled from 'styled-components';
import HamburgerNav from './HamburgerNav'
import useWindowSize from '../hooks/useWindowSize'
import { OUTSIDE_MARGIN } from '../utils/Constants'

interface Iprops {
    outsideMargin?: string;
}

const Container = styled.div<Iprops>`
    width: 100%;
    height: 55px;
`;
const MainDiv = styled.div<Iprops>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
    margin-left: ${props => props.outsideMargin};
    margin-right: ${props => props.outsideMargin};
`;

const Headline = styled.h1`
    font-size: 1rem;
`;

const Header = () => {
    const size = useWindowSize();
    console.log(size)
    return (
        <Container>
            <MainDiv outsideMargin={OUTSIDE_MARGIN}>
                <Headline>PhoneAFriend.care</Headline>
                {
                    (size.width && size.width<1500) ?
                    <HamburgerNav /> :
                    <Nav />
                }
               
            </MainDiv>
        </Container>
    )
}

export default Header;
