import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useStateValue } from "../../contexts/AppContext";
import MobileAuthPopup from "../../components/mobileauth/MobileAuthPopup";
import { useHistory, useLocation } from "react-router-dom";

export type RedirectedLocationProps = {
  state: {
    from: string;
  };
};

function hasFromInLocationState(
  location: any
): location is RedirectedLocationProps {
  return location.state && "from" in location.state;
}

const LoginPage = () => {
  const [authVisible, setAuthVisible] = useState<boolean>(true);
  const { dispatch } = useStateValue();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const unlistenToAuth = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "USER_LOGIN", userId: authUser.uid });
        const { from } = hasFromInLocationState(location)
          ? location.state
          : { from: "/account" };
        history.replace(from);
      } else {
        dispatch({ type: "USER_LOGIN", userId: "" });
      }
    });
    return () => {
      unlistenToAuth();
    };
    // eslint-disable-next-line
  }, []);

  const openAuth = () => setAuthVisible(true);
  const closeAuth = () => setAuthVisible(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Log in
      <button onClick={openAuth}>Log In</button>
      <MobileAuthPopup open={authVisible} onClose={closeAuth} />
    </div>
  );
};

export default LoginPage;
