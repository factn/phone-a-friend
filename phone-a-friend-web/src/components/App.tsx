/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import MainSplash from './splashscreen/MainSplash';
import styled from 'styled-components';
import Header from './Header'

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import SignUp from './SignUp';





const MainDiv = styled.div`
    width: 750px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 0 auto;
`;

function App() {
    return (

            <MainDiv>
                <Header />
                <MainSplash />
            </MainDiv>
      
    );
}

export default App;
