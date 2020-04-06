import { useEffect, useState } from "react";
import { useStateValue } from "../contexts/AppContext";
import { isEmptyObject } from "../utils/object.utils";
import { getVolunteer } from "../api/volunteer";
import { Volunteer } from "../model/volunteer";

function useVolunteer(
  successCallback: (volunteer: Volunteer) => void,
  errorCallback: (err: string) => void
) {
  const { state, dispatch } = useStateValue();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (isEmptyObject(state.currentVolunteer)) {
      setIsFetching(true);
      getVolunteer(state.userAuthId)
        .then((volunteer) => {
          dispatch({ type: "VOLUNTEER_STORE_DETAILS", volunteer });
          setIsFetching(false);
          successCallback(volunteer);
        })
        .catch((err) => {
          errorCallback(err.message);
          setIsFetching(false);
        });
    }
    // eslint-disable-next-line
  }, []);

  return {
    isFetching,
    setIsFetching,
  };
}

export default useVolunteer;
