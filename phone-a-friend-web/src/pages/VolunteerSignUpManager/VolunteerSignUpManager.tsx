import React, { useState } from "react";
import firebase from "firebase";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { User } from "../../model/user";
import { emptyAvailability } from "../../model/availability";
import FormBasicInfoPage from "../RegisterFlow/FormBasicInfoPage";
import BaseFormLayout from "../../layouts/BaseFormLayout";
import FormPageGenderLanguages from "../RegisterFlow/FormPageGenderLanguages";
import FormPageIntroduction from "../RegisterFlow/FormPageIntroduction";
import FormAvailability from "../RegisterFlow/FormAvailability";
import { useStateValue } from "../../contexts/AppContext";
import { Volunteer } from "../../model/volunteer";
import { createVolunteer } from "../../api/volunteer";
import useVolunteer from "../../hooks/useVolunteer";
import { VOLUNTEER_BACKGROUND_COLOR } from "../../Colors";

const initialState: Volunteer & AcceptedTerms = {
  phoneNumber: "",
  name: "",
  email: "",
  dateOfBirth: "",
  country: "",
  zipcode: "",
  languages: [],
  introduction: "",
  gender: "male",
  localTimeAvailability: emptyAvailability,
  utcAvailability: emptyAvailability,
  timezone: "",
  acceptTerms: false,
};

type AcceptedTerms = {
  acceptTerms: boolean;
};

const TOTAL_STEPS = 4;

const VolunteerSignUpManager: React.FC<{}> = () => {
  const { state, dispatch } = useStateValue();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<Volunteer & AcceptedTerms>(
    initialState
  );

  const { isFetching, setIsFetching } = useVolunteer(
    () => history.replace("/account/volunteer"),
    (err) => history.replace(url + "/" + 1)
  );

  function handleSubmit(values: Partial<User>) {
    const newJourneyValues = {
      ...formValues,
      ...values,
    };
    setFormValues(newJourneyValues);

    if (step === TOTAL_STEPS) {
      setIsFetching(true);
      createVolunteer({
        ...newJourneyValues,
        id: state.userAuthId,
      })
        .then(() => {
          dispatch({
            type: "VOLUNTEER_STORE_DETAILS",
            volunteer: newJourneyValues,
          });
          setIsFetching(false);
          history.push("/account/volunteer");
        })
        .catch((err) => {
          setIsFetching(false);
        });
    } else {
      const nextPage = step + 1;
      setStep(nextPage);
      history.push(url + "/" + nextPage);
    }
  }

  return (
    <>
      {!isFetching && (
        <Switch>
          <Route path={`${path}/4`}>
            <BaseFormLayout
              backgroundColor={VOLUNTEER_BACKGROUND_COLOR}
              title="Select the time slots that you are available"
              step={4}
              totalSteps={TOTAL_STEPS}
            >
              <FormAvailability onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={`${path}/3`}>
            <BaseFormLayout
              backgroundColor={VOLUNTEER_BACKGROUND_COLOR}
              title="A little introduction for your callers."
              step={3}
              totalSteps={TOTAL_STEPS}
            >
              <FormPageIntroduction onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={`${path}/2`}>
            <BaseFormLayout
              backgroundColor={VOLUNTEER_BACKGROUND_COLOR}
              title="Now for a little background."
              step={2}
              totalSteps={TOTAL_STEPS}
            >
              <FormPageGenderLanguages onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={""}>
            <BaseFormLayout
              backgroundColor={VOLUNTEER_BACKGROUND_COLOR}
              title="Let's start with an introduction and some contact info."
              step={1}
              totalSteps={TOTAL_STEPS}
            >
              <FormBasicInfoPage
                initialValues={{
                  phoneNumber: firebase.auth().currentUser?.phoneNumber || "",
                }}
                onSubmit={handleSubmit}
              />
            </BaseFormLayout>
          </Route>
        </Switch>
      )}
    </>
  );
};

export default VolunteerSignUpManager;
