import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { DARK_BLUE } from '../utils/Colors'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'


interface Iprops {
    readonly marginLeft?: string;
    readonly marginRight?: string;
}


const Navs = styled.span<Iprops>`
    color: white;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
    &:hover {
        color: yellow;
    }
`;

const Button = styled(Navs)`
    font-size: .6em;
`;


const Main = styled.div`
   background: ${props => props.color};
    height: 50px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

type Props = {
    outsideMargin?: string;
    betweenMargin?: string;
}


const Footer: React.FC<Props> = ({ outsideMargin = '70px', betweenMargin = '20px' }) => (
    <Router>
        <Main color={DARK_BLUE}>
            <div>
                <Link to="/">
                    <Button marginLeft={outsideMargin}>
                        © 2020 PhoneAFriend.care
                </Button>
                </Link>
                <Link to="/privacy">
                    <Button marginLeft={betweenMargin}>
                        Privacy Policy
                </Button>
                </Link>
            </div>
            <div>
                <a href="https://www.twitter.com">
                    <Navs marginRight={betweenMargin}>
                        <FaTwitter  size={18}/>
                    </Navs>
                </a>
                <a href="https://www.facebook.com">
                    <Navs marginRight={outsideMargin}>
                        <FaFacebookF  size={18}/>
                    </Navs>
                </a>
            </div>
        </Main>
    </Router>
)


export default Footer
