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

const CALLER = "caller";
const CALLEE = "callee";
const NEITHER = "neither";

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
  const [role, setRole] = useState(NEITHER);

  const makeCall = () => {
    setRole(CALLER);
  };

  const receiveCall = () => {
    setRole(CALLEE);
  };

  const handleGetStarted = () => {
    // By using the <Link> components from react-route-dom we can navigate automatically without needing callbacks
  };

  return (
    <MainDiv>
      <Header />
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <ProtectedRoute path="/loggedIn">
            <ProtectedRouteTest />
          </ProtectedRoute>

          <Route path="/register">
            <Intro
              color={role === CALLER ? PEACH : LAVENDER}
              copy={role === CALLER ? "Phone a Friend" : "Receive a Call"}
              getStarted={handleGetStarted}
            />
          </Route>

          <Route default path="/">
            <MainSplash makeCall={makeCall} receiveCall={receiveCall} />
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
