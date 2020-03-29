import React from 'react'
import styled from 'styled-components';
import CallOrReceive from './CallOrReceive'
import MainJumbo from './MainJumbo'
import { PEACH } from '../../utils/Colors';
import { LAVENDER } from '../../utils/Colors'


const MainDiv = styled.nav`
    width: 750px;
    height: 265px;
    overflow:hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const MainSplash = () => (
        <>
            <MainDiv>
                <CallOrReceive color={PEACH} btnCopy="Phone a Friend" />
                <CallOrReceive color={LAVENDER} btnCopy="Take a Call" />
            </MainDiv> 
            <MainJumbo />
        </>
    )


export default MainSplash
