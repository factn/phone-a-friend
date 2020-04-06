import React, { useState } from "react";
import firebase from "firebase";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { User } from "../../model/user";
import { emptyAvailability } from "../../model/availability";
import FormBasicInfoPage from "../RegisterFlow/FormBasicInfoPage";
import BaseFormLayout from "../../layouts/BaseFormLayout";
import FormPageGenderLanguages from "../RegisterFlow/FormPageGenderLanguages";
import FormPageIntroduction from "../RegisterFlow/FormPageIntroduction";
import FormPagePreferences from "../RegisterFlow/FormPagePreferences";
import FormAvailability from "../RegisterFlow/FormAvailability";
import { useStateValue } from "../../contexts/AppContext";
import { createUser } from "../../api/user";
import useUser from "../../hooks/useUser";
import { USER_BACKGROUND_COLOR } from "../../Colors";

const initialState: User & AcceptedTerms = {
  phoneNumber: "",
  name: "",
  email: "",
  country: "",
  zipcode: "",
  languages: [],
  introduction: "",
  genderPreference: "noPreference",
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
  initialValues?: Partial<T>;
};

const TOTAL_STEPS = 5;

const UserSignUpManager: React.FC<{}> = () => {
  const { state, dispatch } = useStateValue();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<User & AcceptedTerms>(
    initialState
  );

  const { isFetching, setIsFetching } = useUser(
    () => history.replace("/account/user"),
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
      createUser({
        ...newJourneyValues,
        id: state.userAuthId,
      })
        .then(() => {
          setIsFetching(false);
          dispatch({ type: "USER_STORE_DETAILS", user: newJourneyValues });
          history.push("/account/user");
        })
        .catch((err) => {
          console.log(err);
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
          <Route path={`${path}/5`}>
            <BaseFormLayout
              backgroundColor={USER_BACKGROUND_COLOR}
              title="Select the time slots that you are available"
              step={5}
              totalSteps={TOTAL_STEPS}
            >
              <FormAvailability onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={`${path}/4`}>
            <BaseFormLayout
              backgroundColor={USER_BACKGROUND_COLOR}
              title="Almost done! Let's set up your call."
              step={4}
              totalSteps={TOTAL_STEPS}
            >
              <FormPagePreferences onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={`${path}/3`}>
            <BaseFormLayout
              backgroundColor={USER_BACKGROUND_COLOR}
              title="Anything you want your caller to know before chatting?"
              step={3}
              totalSteps={TOTAL_STEPS}
            >
              <FormPageIntroduction onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={`${path}/2`}>
            <BaseFormLayout
              backgroundColor={USER_BACKGROUND_COLOR}
              title="Now for a little background."
              step={2}
              totalSteps={TOTAL_STEPS}
            >
              <FormPageGenderLanguages onSubmit={handleSubmit} />
            </BaseFormLayout>
          </Route>
          <Route path={""}>
            <BaseFormLayout
              backgroundColor={USER_BACKGROUND_COLOR}
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

export default UserSignUpManager;
