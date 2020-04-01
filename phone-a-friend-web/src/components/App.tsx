import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";

import ProtectedRoute from "./routes/ProtectedRoute";
import MainSplash from "./splashscreen/MainSplash";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./intro/Intro";

import { PEACH } from "../utils/Colors";
import { LAVENDER } from "../utils/Colors";

import {
  LOGIN_PATH,
  VOLUNTEER_SIGN_UP_PATH,
  USER_SIGN_UP_PATH,
  VOLUNTEER_PATH,
  USER_PATH
} from "../Paths";
import UserSignUpPage from "../pages/UserSignUpPage/UserSignUpPage";
import VolunteerSignUpPage from "../pages/VolunteerSignUpPage/VolunteerSignUpPage";

const MainDiv = styled.div`
  width: 96vw;
  height: 96vh;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 0 auto;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
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
              color={PEACH}
              copy={"Phone a Friend"}
            />
          </Route>

          <Route path={VOLUNTEER_PATH}>
            <Intro
              signUpPath={VOLUNTEER_SIGN_UP_PATH}
              color={LAVENDER}
              copy={"Receive a Call"}
            />
          </Route>

          <ProtectedRoute path={USER_SIGN_UP_PATH}>
            <UserSignUpPage />
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

export default App;
