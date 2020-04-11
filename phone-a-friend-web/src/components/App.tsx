import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Media  from "../utils/CustomMedia";
import * as Constants  from '../utils/Constants';
import useMediaType from '../hooks/useMediaType'
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import MainSplash from "./splashscreen/MainSplash";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./intro/Intro";
import * as Colors from "../Colors";
import {
    LOGIN_PATH,
    VOLUNTEER_SIGN_UP_PATH,
    USER_SIGN_UP_PATH,
    VOLUNTEER_PATH,
    USER_PATH,
    USER_ACCOUNT_PATH,
    VOLUNTEER_ACCOUNT_PATH,
} from "../Paths";
import UserSignUpManager from "../pages/UserSignUpManager/UserSignUpManager";
import VolunteerSignUpManager from "../pages/VolunteerSignUpManager/VolunteerSignUpManager";
import AccountPage from "../pages/VolunteerAccountPage/VolunteerAccountPage";
import UserAccountPage from "../pages/UserAccountPage/UserAccountPage";


const MainDiv = styled.div`
 
  display: grid;
  ${Media.greaterThan('mobile')`
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: [header] 92px [main] 1fr [footer] 50px;
    border: 1px solid black;
    border-radius: 10px;
    
  `}
  ${Media.lessThan('mobile')`
    grid-template-columns: 1fr;
    grid-template-rows: [header] 92px [main] auto [footer] 50px;
    border:0;
  `}
  & > div {
    justify-self:  stretch;
  }
`;

function App() {
    const mediaType =  useMediaType();
    const [isMobile, setIsMobile] =  useState(false);
    useEffect(() => {
        if (mediaType === Constants.MOBILE) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    },[mediaType])

    return (
        <MainDiv>
            <Router>
                <Header isMobile={isMobile}/>
                <Switch>
                    <Route path={LOGIN_PATH}>
                        <LoginPage />
                        <MainSplash isMobile={isMobile}/>
                    </Route>

                    <Route path={USER_PATH}>
                        <Intro
                            isMobile={isMobile}
                            signUpPath={USER_SIGN_UP_PATH}
                            bgColor={Colors.PEACH}
                            copy={"phone a friend"}
                        />
                    </Route>

                    <Route path={VOLUNTEER_PATH}>
                        <Intro
                            isMobile={isMobile}
                            signUpPath={VOLUNTEER_SIGN_UP_PATH}
                            bgColor={Colors.LAVENDER}
                            copy={"receive a call"}
                        />
                    </Route>

                    <ProtectedRoute path={USER_ACCOUNT_PATH}>
                        <UserAccountPage />
                    </ProtectedRoute>

                    <ProtectedRoute path={VOLUNTEER_ACCOUNT_PATH}>
                        <AccountPage />
                    </ProtectedRoute>

                    <ProtectedRoute path={USER_SIGN_UP_PATH}>
                        <UserSignUpManager />
                    </ProtectedRoute>

                    <ProtectedRoute path={VOLUNTEER_SIGN_UP_PATH}>
                        <VolunteerSignUpManager />
                    </ProtectedRoute>

                    <Route default path="/">
                        <MainSplash isMobile={isMobile}/>
                    </Route>
                </Switch>
                <Footer outsideMargin={Constants.OUTSIDE_MARGIN}/>
            </Router>
        </MainDiv>
    );
}

App.whyDidYouRender = true;

export default App;
