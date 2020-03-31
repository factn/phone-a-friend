import React from 'react'
import styled from "styled-components";
import { DARK_BLUE } from '../utils/Colors'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'


interface Iprops {
    readonly marginLeft?:string;
    readonly marginRight?:string;
}
const Button = styled.span<Iprops>`
    font-size: .6em;
    color: white;
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
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

const Footer:React.FC<Props> = ({ outsideMargin='70px', betweenMargin='20px'}) => {
    return (
        <Main color={DARK_BLUE}>
            <div>
                <Button role='button' marginLeft={outsideMargin}>
                    © 2020 PhoneAFriend.care
                </Button>
                <Button role='button' marginLeft={betweenMargin}>
                    Privacy Pattern
                </Button>
            </div>
            <div>
                <Button role='button'  marginRight={betweenMargin}>
                    <FaTwitter />
                </Button>
                <Button role='button' marginRight={outsideMargin}>
                    <FaFacebookF />
                </Button>

            </div>

        </Main>
    )
}

export default Footer
