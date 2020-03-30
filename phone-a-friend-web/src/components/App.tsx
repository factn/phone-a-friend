/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState  } from 'react';

import MainSplash from './splashscreen/MainSplash';
import styled from 'styled-components';
import Header from './Header';
import Intro from './intro/Intro'


import Register from './register/'
import { PEACH } from '../utils/Colors';
import { LAVENDER } from '../utils/Colors';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import SignUp from './SignUp';

const CALLER='caller';
const CALLEE='callee';
const NEITHER = 'neither'

const SPLASH_SCREEN = 'splashScreen';
const REGISTER_SCREEN = 'registerScreen';

const MainDiv = styled.div`
    width: 750px;
    height: 463px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 0 auto;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
`;

function App() {
    const [role, setRole] = useState(NEITHER)
    const [isRegistered, seIsRegistered] = useState(false);
    const [currScreen, setCurrScreen] = useState(SPLASH_SCREEN)


    const makeCall = () => {;
        
        setRole(CALLER)
        if (!isRegistered) {
            setCurrScreen(REGISTER_SCREEN)
        }
    }

    const receiveCall = () => {
        setRole(CALLEE)
        if (!isRegistered) {
            setCurrScreen(REGISTER_SCREEN)
        }
    }

    const handleGetStarted  = () => {
        setCurrScreen(REGISTER_SCREEN);
    }

    return (
            <MainDiv>
                <Header />
                { (currScreen===SPLASH_SCREEN) ?
                <MainSplash 
                    makeCall={makeCall}
                    receiveCall={receiveCall}
                />
                : 
                <Intro 
                    color={(role === CALLER) ? PEACH : LAVENDER} 
                    copy={(role === CALLER) ? 'Phone a Friend' : "Receive a Call"} 
                    getStarted={handleGetStarted}
                />
                } 
            </MainDiv>
    );
}

export default App;
