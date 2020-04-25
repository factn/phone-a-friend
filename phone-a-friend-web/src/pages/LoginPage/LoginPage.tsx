import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase';
import { useStateValue } from '../../contexts/AppContext';
import MobileAuthPopup from '../../components/mobileauth/MobileAuthPopup';

export type RedirectedLocationProps = {
  state: {
    from: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasFromInLocationState(location: any): location is RedirectedLocationProps {
  return location.state && 'from' in location.state;
}

const LoginPage = () => {
  const { dispatch } = useStateValue();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const unlistenToAuth = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: 'USER_LOGIN', userId: authUser.uid });
        const { from } = hasFromInLocationState(location) ? location.state : { from: '/account' };
        history.replace(from);
      } else {
        dispatch({ type: 'USER_LOGIN', userId: '' });
      }
    });
    return () => {
      unlistenToAuth();
    };
    // eslint-disable-next-line
  }, []);

  const handleOnClose = () => {
    history.push('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <MobileAuthPopup open={true} onClose={handleOnClose} />
    </div>
  );
};

export default LoginPage;
