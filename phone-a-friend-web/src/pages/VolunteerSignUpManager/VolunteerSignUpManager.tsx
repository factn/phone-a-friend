import React, { useState, useEffect } from "react";
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
import { getVolunteer, createVolunteer } from "../../api/volunteer";

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
export type FormPage<T> = {
  onSubmit: (values: T) => void;
  initialValues?: T;
};

const TOTAL_STEPS = 4;

const VolunteerSignUpManager: React.FC<{}> = () => {
  const { state, dispatch } = useStateValue();
  const { path, url } = useRouteMatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<Volunteer & AcceptedTerms>(
    initialState
  );

  useEffect(() => {
    setIsLoading(true);
    getVolunteer(state.userAuthId)
      .then((volunteer) => {
        setIsLoading(false);
        dispatch({ type: "VOLUNTEER_STORE_DETAILS", volunteer });
        history.replace("/account/volunteer");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
        history.replace(url + "/" + 1);
      });

    // eslint-disable-next-line
  }, []);

  function handleSubmit(values: Partial<User>) {
    const newJourneyValues = {
      ...formValues,
      ...values,
    };
    setFormValues(newJourneyValues);

    if (step === TOTAL_STEPS) {
      createVolunteer({
        ...newJourneyValues,
        id: state.userAuthId,
      }).then(() => {
        dispatch({
          type: "VOLUNTEER_STORE_DETAILS",
          volunteer: newJourneyValues,
        });
      });
    } else {
      const nextPage = step + 1;
      setStep(nextPage);
      history.push(url + "/" + nextPage);
    }
  }

  return (
    <>
      {!isLoading && (
        <Switch>
          <Route path={`${path}/4`}>
            <BaseFormLayout
              title="Select the time slots that you are available"
              step={4}
              totalSteps={TOTAL_STEPS}
            >
              <FormAvailability onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={`${path}/3`}>
            <BaseFormLayout
              title="A little introduction for your callers."
              step={3}
              totalSteps={TOTAL_STEPS}
            >
              <FormPageIntroduction onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={`${path}/2`}>
            <BaseFormLayout
              title="Now for a little background."
              step={2}
              totalSteps={TOTAL_STEPS}
            >
              <FormPageGenderLanguages onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={""}>
            <BaseFormLayout
              title="Let's start with an introduction and some contact info."
              step={1}
              totalSteps={TOTAL_STEPS}
            >
              <FormBasicInfoPage onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
        </Switch>
      )}
    </>
  );
};

export default VolunteerSignUpManager;
