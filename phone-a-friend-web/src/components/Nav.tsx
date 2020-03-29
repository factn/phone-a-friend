import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
`;
const NavDiv = styled.nav`
    margin-left: 10px;
    font-size: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Nav = () => {
    return (
        <NavContainer>
            <NavDiv>Home</NavDiv>
            <NavDiv>Phone a Friend</NavDiv>
            <NavDiv>Take a Call</NavDiv>
            <NavDiv>Contact Us</NavDiv>        
        </NavContainer>
    )
}

export default Nav
