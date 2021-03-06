import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Media from '../utils/CustomMedia';
import useMediaType from '../hooks/useMediaType';
import ProtectedRoute from './routes/ProtectedRoute';
import MainSplash from './splashscreen/MainSplash';
import Header from './Header';
import Footer from './Footer';
import Intro from './intro/Intro';
import * as Constants from '../utils/Constants';
import * as Colors from '../Colors';
import * as Paths from '../Paths';
import UserSignUpManager from '../pages/UserSignUpManager/UserSignUpManager';
import VolunteerSignUpManager from '../pages/VolunteerSignUpManager/VolunteerSignUpManager';
import VolunteerAccountPage from '../pages/VolunteerAccountPage/VolunteerAccountPage';
import UserAccountPage from '../pages/UserAccountPage/UserAccountPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AccountPageRedirect from '../pages/AccountPageRedirect/AccountPageRedirect';
import LogoutPage from '../pages/LogoutPage/LogoutPage';

const MainDiv = styled.div`
  position: relative;
  display: grid;
  ${Media.greaterThan('mobile')`
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: [header] 92px [main] 1fr [footer] 50px;
    border: 1px solid black;
    border-radius: 10px;
    min-width: 890px;
  `}
  ${Media.lessThan('mobile')`
    grid-template-columns: 1fr;
    grid-template-rows: [header] 45px [main] 1fr [footer] 43px;
    border:0;
    min-width: 370px;
    min-height: 100vh;
  `}
`;

function App() {
  const mediaType = useMediaType();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (mediaType === Constants.MOBILE) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [mediaType]);

  return (
    <MainDiv>
      <Router>
        <Header isMobile={isMobile} />

        <Switch>
          <Route path={Paths.LOGIN_PATH}>
            <LoginPage />
            <MainSplash isMobile={isMobile} />
          </Route>

          <Route path={Paths.USER_PATH}>
            <Intro
              isMobile={isMobile}
              signUpPath={Paths.USER_SIGN_UP_PATH}
              bgColor={Colors.PEACH}
              copy={'phone a friend'}
            />
          </Route>

          <Route path={Paths.VOLUNTEER_PATH}>
            <Intro
              isMobile={isMobile}
              signUpPath={Paths.VOLUNTEER_SIGN_UP_PATH}
              bgColor={Colors.LAVENDER}
              copy={'receive a call'}
            />
          </Route>

          <Route path={Paths.LOGOUT_PATH}>
            <LogoutPage />
          </Route>

          <ProtectedRoute path={Paths.USER_ACCOUNT_PATH}>
            <UserAccountPage />
          </ProtectedRoute>

          <ProtectedRoute path={Paths.VOLUNTEER_ACCOUNT_PATH}>
            <VolunteerAccountPage />
          </ProtectedRoute>

          <ProtectedRoute path={Paths.ACCOUNT_PATH}>
            <AccountPageRedirect isMobile={isMobile} />
          </ProtectedRoute>

          <ProtectedRoute path={Paths.USER_SIGN_UP_PATH}>
            <UserSignUpManager />
          </ProtectedRoute>

          <ProtectedRoute path={Paths.VOLUNTEER_SIGN_UP_PATH}>
            <VolunteerSignUpManager />
          </ProtectedRoute>

          <Route default path="/">
            <MainSplash isMobile={isMobile} />
          </Route>
        </Switch>
        <Footer isMobile={isMobile} />
      </Router>
    </MainDiv>
  );
}

App.whyDidYouRender = true;

export default App;
