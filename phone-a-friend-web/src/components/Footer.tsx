import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import *  as Constants from "../utils/Constants"
import * as Colors from '../Colors'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'
import { OUTSIDE_MARGIN } from '../utils/Constants'

interface Iprops {
    readonly marginLeft?: string;
    readonly marginRight?: string;
    readonly outsideMargin?: string;
    readonly h?: number;
}


const Navs = styled.span<Iprops>`
    color: white;
    &:hover {
        color: yellow;
    }
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`;

const Button = styled(Navs)`
    font-size: .6em;
`;


const Main = styled.div<Iprops>`
    background: ${props => props.color};
    height: ${(props) => `${props.h}px`};
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
`;

const BtnsContainer = styled.div<Iprops>`
    margin-left: ${props => props.outsideMargin};
    margin-right: ${props => props.outsideMargin};
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;

type Props = {
    outsideMargin?: string;
    betweenMargin?: string;
}


const Footer: React.FC<Props> = ({ outsideMargin, betweenMargin = '20px' }) => (
    <Main color={Colors.DARK_BLUE} h={Constants.FOOTER_HEIGHT}>
        <BtnsContainer outsideMargin={OUTSIDE_MARGIN}>
            <div>
                <Link to="/">
                    <Button>
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
                        <FaTwitter size={18} />
                    </Navs>
                </a>
                <a href="https://www.facebook.com">
                    <Navs>
                        <FaFacebookF size={18} />
                    </Navs>
                </a>
            </div>
        </BtnsContainer>
    </Main>
)


export default Footer
