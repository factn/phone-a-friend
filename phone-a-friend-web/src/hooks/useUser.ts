import { useEffect, useState } from 'react';
import { useStateValue } from '../contexts/AppContext';
import { isEmptyObject } from '../utils/object.utils';
import { getUser } from '../api/user';
import { User } from '../model/user';

function useUser(successCallback: (user: User) => void, errorCallback: (err: string) => void) {
  const { state, dispatch } = useStateValue();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isEmptyObject(state.currentVolunteer)) {
      setIsFetching(true);
      getUser(state.userAuthId)
        .then((user) => {
          dispatch({ type: 'USER_STORE_DETAILS', user });
          setIsFetching(false);
          successCallback(user);
        })
        .catch((err) => {
          setIsFetching(false);
          errorCallback(err.message);
        });
    }
    // eslint-disable-next-line
  }, []);

  return {
    isFetching,
    setIsFetching,
  };
}

export default useUser;
