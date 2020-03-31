import React from 'react';
import {BrowserRouter as Router,  Link } from "react-router-dom";
import styled from 'styled-components';
import { CALLER_PATH, CALLEE_PATH, CONTACT_PATH } from '../Paths'; 

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
            <Router>
                <Link to="/"><NavDiv>Home</NavDiv></Link>
                <Link to={CALLER_PATH}><NavDiv>Phone a Friend</NavDiv></Link>
                <Link to={CALLEE_PATH}><NavDiv>Take a Call</NavDiv></Link>
                <Link to={CONTACT_PATH}><NavDiv>Contact Us</NavDiv></Link>
            </Router>
        </NavContainer>
    )
}

export default Nav
