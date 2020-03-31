import React from 'react'
import styled from 'styled-components';
import CallOrReceive from './CallOrReceive'
import MainJumbo from './MainJumbo'
import BottomBanner from './BottomBanner'
import { PEACH, LAVENDER } from '../../utils/Colors';
import { CALLER_PATH, CALLEE_PATH, LOGIN_PATH } from '../../Paths';

const MainDiv = styled.nav`
    width: 100%;
    height: 100%;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const IwantDiv = styled.div`
    height: 100%;
    overflow:hidden;
    display: flex;
    flex-direction: row;
`;

interface Iprops {
    readonly grow: number;
}

const FlexBox = styled.div<Iprops>`
    flex-grow: ${props => props.grow};
`;


type Props = { loggedin: boolean };

const MainSplash: React.FunctionComponent<Props> = ({ loggedin }) => (
    <MainDiv>
        <FlexBox grow={4}>
            <IwantDiv>
                <CallOrReceive
                    color={PEACH}
                    btnCopy="Phone a Friend"
                    path={loggedin ? CALLER_PATH : LOGIN_PATH} />
                <CallOrReceive
                    color={LAVENDER}
                    btnCopy="Take a Call"
                    path={loggedin ? CALLEE_PATH : LOGIN_PATH}
                    leftHandBool={false} />
            </IwantDiv>
        </FlexBox>
        <FlexBox grow={2}>
            <MainJumbo />
        </FlexBox>
        <FlexBox grow={1}>
            <BottomBanner />
        </FlexBox>
    </MainDiv>
)


export default MainSplash
