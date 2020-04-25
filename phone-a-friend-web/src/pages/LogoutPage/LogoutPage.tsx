import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { HOME } from '../../Paths';
import { useStateValue } from '../../contexts/AppContext';

const LogoutPage: React.FC<{}> = () => {
  const { dispatch } = useStateValue();
  const history = useHistory();

  useEffect(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'USER_LOGOUT' });
        history.replace(HOME);
      })
      .catch((err) => {
        console.error(err.message);
      });
    // eslint-disable-next-line
  }, []);

  return <div>Logging out</div>;
};

export default LogoutPage;
