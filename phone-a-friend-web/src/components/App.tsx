import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";

import ProtectedRoute from "./routes/ProtectedRoute";
import MainSplash from "./splashscreen/MainSplash";
import styled from "styled-components";
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
} from "../Paths";
import UserSignUpManager from "../pages/UserSignUpManager/UserSignUpManager";
import VolunteerSignUpPage from "../pages/VolunteerSignUpPage/VolunteerSignUpPage";
import media from "styled-media-query";

const MainDiv = styled.div`
  overflow: scroll;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  ${media.greaterThan("medium")`
  border: 1px solid black;
  border-radius: 10px;
  `}

  ${media.greaterThan("large")`
    width: 100vw;
  `}
`;

function App() {
  return (
    <MainDiv>
      <Header />
      <Router>
        <Switch>
          <Route path={LOGIN_PATH}>
            <LoginPage />
            <MainSplash />
          </Route>

          <Route path={USER_PATH}>
            <Intro
              signUpPath={USER_SIGN_UP_PATH}
              bgColor={Colors.PEACH}
              copy={"Phone a Friend"}
            />
          </Route>

          <Route path={VOLUNTEER_PATH}>
            <Intro
              signUpPath={VOLUNTEER_SIGN_UP_PATH}
              bgColor={Colors.LAVENDER}
              copy={"Receive a Call"}
            />
          </Route>

          <ProtectedRoute path={USER_SIGN_UP_PATH}>
            <UserSignUpManager />
          </ProtectedRoute>

          <ProtectedRoute path={VOLUNTEER_SIGN_UP_PATH}>
            <VolunteerSignUpPage />
          </ProtectedRoute>

          <Route default path="/">
            <MainSplash />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </MainDiv>
  );
}

App.whyDidYouRender = true;

export default App;
