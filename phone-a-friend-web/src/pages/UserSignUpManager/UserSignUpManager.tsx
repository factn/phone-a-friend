import React, { useState, useEffect } from "react";
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

export type ReadyToChat = "unanswered" | "true" | "false";

const initialState: User = {
  phoneNumber: "",
  name: "",
  country: "",
  zipcode: "",
  languages: [],
  introduction: "",
  genderPreference: "noPreference",
  availability: emptyAvailability,
};

export type FormPage<T> = {
  onSubmit: (values: T) => void;
  initialValues?: T;
};

const TOTAL_STEPS = 5;

const UserSignUpManager: React.FC<{}> = () => {
  const { state, dispatch } = useStateValue();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<User>(initialState);

  useEffect(() => {
    history.push(url + "/" + 1);
    // eslint-disable-next-line
  }, []);

  function handleSubmit(values: Partial<User>) {
    const newJourneyValues = {
      ...formValues,
      ...values,
    };
    setFormValues(newJourneyValues);

    if (step !== TOTAL_STEPS) {
      console.log("Creating user");
      createUser({
        ...newJourneyValues,
        // id: "6reRvNjbqSc6k97IxjdeXvC9QON2",
        id: state.userID,
      }).then(() => {
        console.log("User created");
        dispatch({ type: "USER_SAVE_DETAILS", user: newJourneyValues });
      });
    } else {
      const nextPage = step + 1;
      setStep(nextPage);
      history.push(url + "/" + nextPage);
    }
  }

  return (
    <Switch>
      <Route path={`${path}/5`}>
        <BaseFormLayout
          title="Select the time slots that you are available"
          step={5}
          totalSteps={TOTAL_STEPS}
        >
          <FormAvailability onSubmit={handleSubmit} />
        </BaseFormLayout>
      </Route>
      <Route path={`${path}/4`}>
        <BaseFormLayout
          title="Almost done! Let's set up your call."
          step={4}
          totalSteps={TOTAL_STEPS}
        >
          <FormPagePreferences onSubmit={handleSubmit} />
        </BaseFormLayout>
      </Route>
      <Route path={`${path}/3`}>
        <BaseFormLayout
          title="Anything you want your caller to know before chatting?"
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
  );
};

export default UserSignUpManager;
