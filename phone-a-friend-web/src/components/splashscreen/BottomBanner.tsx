import React from 'react'
import styled from 'styled-components';
import { LIGHT_BLUE } from '../../utils/Colors'

interface Iprops {

    bg: string;
}

const MainDiv = styled.nav<Iprops>`
    background: ${props => props.bg};
    width: 100%;
    height: 100%;
    overflow:hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
`;

const Button = styled.div`
  border: 2px solid black;
  font-size: 0.8rem;
  padding: 6px;
  width: 142px;
  height: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


const BottomBanner = () => {
    return (
        <MainDiv bg={LIGHT_BLUE}>
            <h2>Stay Connected</h2>
            <div>
                <input id="namedInput" 
                    placeholder="Your email address"
                    type="text" name="email"/>
            </div>
            <Button role="buttton">Submit</Button>
        </MainDiv>
    )
}

export default BottomBanner
