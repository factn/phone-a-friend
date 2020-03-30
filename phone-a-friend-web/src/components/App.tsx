/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import { useStateValue } from "../contexts/AppContext";

import ProtectedRoute from "./routes/ProtectedRoute";
import MainSplash from "./splashscreen/MainSplash";
import styled from "styled-components";
import Header from "./Header";
import Intro from "./intro/Intro";

// import Register from "./register/";
import { PEACH } from "../utils/Colors";
import { LAVENDER } from "../utils/Colors";

// import SignUp from './SignUp';
import { CALLER_PATH, CALLEE_PATH, REGISTER_PATH, LOGIN_PATH, LOGGED_IN_PATH } from '../Paths';

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
    // set to false to bi-pass login
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    return (
        <MainDiv>
            <Header />
            <Router>
                <Switch>
                    <Route path={LOGIN_PATH}>
                        <LoginPage />
                        <MainSplash loggedin={isLoggedIn} />
                    </Route>

                    <ProtectedRoute path={LOGGED_IN_PATH}>
                        <ProtectedRouteTest />
                    </ProtectedRoute>

                    <Route path={isLoggedIn ? CALLER_PATH : LOGIN_PATH}>
                        <Intro
                            color={PEACH}
                            copy={"Phone a Friend"}
                        />
                    </Route>
                    <Route path={isLoggedIn ? CALLEE_PATH : LOGIN_PATH}>
                        <Intro
                            color={LAVENDER}
                            copy={"Receive a Call"}
                        />
                    </Route>


                    <Route default path="/">
                        <MainSplash loggedin={isLoggedIn} />
                    </Route>
                </Switch>
            </Router>
        </MainDiv>
    );
}

const ProtectedRouteTest: React.FC<{}> = () => (
    <div>User must be logged in to see this</div>
);

export default App;
