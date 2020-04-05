import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import Button from './buttons/Button';
import { CONTACT_PATH, USER_PATH, VOLUNTEER_PATH } from "../Paths";
import * as Colors from '../Colors'

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;


const MARGIN_LEFT = 10

type Props = {
    h: number;
}

const Nav:React.FC<Props> = ({ h }) => (
    <Router>
        <NavContainer>
            <Link to="/">
                <Button
                    h={h} marginLeft={MARGIN_LEFT}
                    hasBorder={false}
                    hoverColor='white' hoverBgColor={Colors.DARK_BLUE}
                    color={Colors.DARK_BLUE}
                >
                    Home
                </Button>
            </Link>
            <Link to={USER_PATH}>
                <Button
                    h={h} marginLeft={MARGIN_LEFT}
                    hasBorder={false}
                    hoverColor='white' hoverBgColor={Colors.DARK_BLUE}
                    color={Colors.DARK_BLUE}
                >
                    Phone a Friend
                </Button>
            </Link>
            <Link to={VOLUNTEER_PATH}>
                <Button
                    h={h} marginLeft={MARGIN_LEFT}
                    hasBorder={false}
                    hoverColor='white' hoverBgColor={Colors.DARK_BLUE}
                    color={Colors.DARK_BLUE}
                >
                    Take a Call
                </Button>
            </Link>
            <Link to={CONTACT_PATH}>
                <Button
                    h={h}
                    hasBorder={false}
                    hoverColor='white' hoverBgColor={Colors.DARK_BLUE}
                    color={Colors.DARK_BLUE}
                >
                    Contact Us
                </Button>
            </Link>
        </NavContainer>
    </Router>
);


export default Nav;
