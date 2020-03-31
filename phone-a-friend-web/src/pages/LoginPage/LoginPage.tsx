import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useStateValue } from "../../contexts/AppContext";
import MobileAuthPopup from "../../components/mobileauth/MobileAuthPopup";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [authVisible, setAuthVisible] = useState<boolean>(true);
  const { dispatch } = useStateValue();
  const history = useHistory();

  useEffect(() => {
    const unlistenToAuth = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({ type: "USER_LOGIN", user: authUser.uid });
        history.push("/loggedIn");
      } else {
        dispatch({ type: "USER_LOGIN", user: "" });
      }
    });
    return () => {
      unlistenToAuth();
    };
  }, [dispatch, history]);

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
