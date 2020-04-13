import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import *  as Constants from "../utils/Constants"
import * as Colors from '../Colors'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'

interface Iprops {
    readonly marginLeft?: string;
    readonly marginRight?: string;
    readonly outsideMargin?: string;
    readonly h?: number;
    readonly isMobile?: boolean;
}


const Navs = styled.span<Iprops>`
    color: white;
    &:hover {
        color: yellow;
    }
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`;

const FooterButton = styled(Navs)`
    font-size:${props => props.isMobile ? '.75rem' : '0.75rem'};
    /* letter-spacing:${props => props.isMobile ? '0.1px': '0.17px'}; */
    font-weight: 500;
`;
const PrivacyButton = styled(FooterButton)`
  font-weight: 600;
`;


const Main = styled.div<Iprops>`
    background: ${props => props.color};
    height: ${(props) => `${props.h}px`};
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
    isMobile:boolean;
}


const Footer: React.FC<Props> = ({ isMobile }) => (
    <Main color={Colors.DARK_BLUE} h={Constants.FOOTER_HEIGHT}>
        <BtnsContainer outsideMargin={Constants.OUTSIDE_MARGIN}>
            <div>
                <Link to="/">
                    <FooterButton isMobile={isMobile}>
                        © 2020 PhoneAFriend.care
                    </FooterButton>
                </Link>
                <Link to="/privacy">
                    <PrivacyButton isMobile={isMobile} marginLeft={isMobile ? '40px' : '29px' }>
                        Privacy Policy
                        </PrivacyButton>
                </Link>
            </div>
            <div>
                <a href="https://www.twitter.com">
                    <Navs marginRight={isMobile ? '40px' : '20px' }>
                        <FaTwitter size={isMobile ?  22 : 18} />
                    </Navs>
                </a>
                <a href="https://www.facebook.com">
                    <Navs>
                        <FaFacebookF size={isMobile ?  22 : 18} />
                    </Navs>
                </a>
            </div>
        </BtnsContainer>
    </Main>
)


export default Footer
