import React from 'react'
import styled from 'styled-components';
import { OUTSIDE_MARGIN } from '../../utils/Constants'
import * as Colors from '../../Colors';

interface Iprops {
    outsideMargin?: string;
    bgColor?: string;
}

const MainDiv = styled.nav<Iprops>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin-left: ${props => props.outsideMargin};
    margin-right: ${props => props.outsideMargin};
`;


const Container = styled.div<Iprops>`
    background: ${props => props.bgColor};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
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

const InputWrapper = styled.div`
    width: 44%;
    input {
        width: 100%;
    }
`;

const BottomBanner = () => {
    return (
        <Container bgColor={Colors.LIGHT_BLUE} >
            <MainDiv outsideMargin={OUTSIDE_MARGIN}>
                <h2>Stay Connected</h2>
                <InputWrapper>
                    <input id="namedInput" 
                        placeholder="Your email address"
                        type="text" name="email"/>
                </InputWrapper>
                <Button role="buttton">Submit</Button>
            </MainDiv>
        </Container>
    )
}

export default BottomBanner
