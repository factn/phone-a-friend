import React from 'react';
import { FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

type Props = {
    btnCopy: string;
    color: string;
}

const MainDiv = styled.nav`
width: 50%;
height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.color}
`;

const CallOrReceive: React.FunctionComponent<Props> = ({ color, btnCopy = 'phone a friend' }) => (
    <MainDiv color={color}>
        
            <h1>I want to</h1>
        
        <div>
           <FaPhone />
        </div>
        <div>
            <button>
                {btnCopy}
            </button>
        </div>
    </MainDiv>
)


export default CallOrReceive
