import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { CONTACT_PATH, USER_PATH, VOLUNTEER_PATH } from "../Paths";
import { DARK_BLUE } from '../Colors'

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;

`;

interface IProps {
    background: string;
    color: string;
}
const NavDiv = styled.div<IProps>`
    height: 55px;
    padding: 0 4px 0 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    font-size: 0.8rem;
    color: ${props => props.color};
    :hover {
        background: ${props => props.background};
        color: white;
    }
`;

const Nav = () => (
    <Router>
        <NavContainer>
            <Link to="/">
                <NavDiv background={DARK_BLUE} color={DARK_BLUE}>Home</NavDiv>
            </Link>
            <Link to={USER_PATH}>
                <NavDiv background={DARK_BLUE} color={DARK_BLUE}>Phone a Friend</NavDiv>
            </Link>
            <Link to={VOLUNTEER_PATH}>
                <NavDiv background={DARK_BLUE} color={DARK_BLUE}>Take a Call</NavDiv>
            </Link>
            <Link to={CONTACT_PATH}>
                <NavDiv background={DARK_BLUE} color={DARK_BLUE}>Contact Us</NavDiv>
            </Link>
        </NavContainer>
    </Router>
);


export default Nav;
