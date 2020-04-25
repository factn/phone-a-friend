import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../contexts/AppContext';
import { getUser, USER_NOT_FOUND_MESSAGE } from '../../api/user';
import { getVolunteer, VOLUNTEER_NOT_FOUND_MESSAGE } from '../../api/volunteer';
import { useHistory } from 'react-router-dom';
import { VOLUNTEER_ACCOUNT_PATH, USER_ACCOUNT_PATH, USER_SIGN_UP_PATH, VOLUNTEER_SIGN_UP_PATH } from '../../Paths';
import { isEmptyObject } from '../../utils/object.utils';
import CallReceiveContainer from '../../components/splashscreen/CallReceiveContainer';
import styled from 'styled-components';

type AccountPageRedirectProps = {
  isMobile: boolean;
};

const H1 = styled.h1`
  margin-left: 10%;
`;

const AccountPageRedirect: React.FC<AccountPageRedirectProps> = ({ isMobile }) => {
  const {
    state: { userAuthId, currentUser, currentVolunteer },
    dispatch,
  } = useStateValue();
  const history = useHistory();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!isEmptyObject(currentUser)) {
      history.replace(USER_ACCOUNT_PATH);
    } else if (!isEmptyObject(currentVolunteer)) {
      history.replace(VOLUNTEER_ACCOUNT_PATH);
    } else {
      getUser(userAuthId)
        .then((user) => {
          dispatch({ type: 'USER_STORE_DETAILS', user });
          history.push(USER_ACCOUNT_PATH);
        })
        .catch((err) => {
          if (err.message === USER_NOT_FOUND_MESSAGE) {
            getVolunteer(userAuthId)
              .then((volunteer) => {
                dispatch({ type: 'VOLUNTEER_STORE_DETAILS', volunteer });
                history.push(VOLUNTEER_ACCOUNT_PATH);
              })
              .catch((err) => {
                if (err.message === VOLUNTEER_NOT_FOUND_MESSAGE) {
                  setIsFetching(false);
                }
              });
          }
        });
    }
  }, [currentUser, currentVolunteer, history, userAuthId, dispatch]);

  return (
    <div>
      {isFetching ? (
        <div>Loading</div>
      ) : (
        <div>
          <H1>Choose an account:</H1>
          <CallReceiveContainer
            isMobile={isMobile}
            volunteerProps={{
              copy: 'Volunteer - Take a Call',
              redirect: VOLUNTEER_SIGN_UP_PATH,
            }}
            userProps={{
              copy: 'Phone a Friend - Request a Call',
              redirect: USER_SIGN_UP_PATH,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AccountPageRedirect;
