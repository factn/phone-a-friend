import React from 'react'
import styled from 'styled-components';
import CallOrReceive from './CallOrReceive'
import MainJumbo from './MainJumbo'
import { PEACH } from '../../utils/Colors';
import { LAVENDER } from '../../utils/Colors'
import { CALLER_PATH, CALLEE_PATH,  LOGIN_PATH } from '../../Paths';

const MainDiv = styled.nav`
    width: 750px;
    height: 265px;
    overflow:hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

type Props = { loggedin:boolean };

const MainSplash:React.FunctionComponent<Props> = ({ loggedin }) => (
    <>
        <MainDiv>
            <CallOrReceive
                color={PEACH}
                btnCopy="Phone a Friend"
                path={loggedin ? CALLER_PATH : LOGIN_PATH} />
            <CallOrReceive
                color={LAVENDER}
                btnCopy="Take a Call"
                path={loggedin ? CALLEE_PATH : LOGIN_PATH} />
        </MainDiv>
        <MainJumbo />
    </>
)


export default MainSplash
