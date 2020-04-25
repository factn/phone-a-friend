import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormPage } from '../UserSignUpManager/UserSignUpManager';
import NextButton from '../../components/buttons/NextButton';
import { GenderPreference } from '../../model/gender';
import { RadioButtonGroup, RadioButton } from '../../components/inputs/RadioButtonGroupField';

type FormPagePreferencesProps = {
  genderPreference: GenderPreference;
  // canChatNow: "yes" | "no";
};

const basicInfoSchema = Yup.object().shape({
  genderPreference: Yup.string().required('Gender preference is required'),
  // canChatNow: Yup.string().required("Introduction is required"),
});

const FormPagePreferences: React.FC<FormPage<FormPagePreferencesProps>> = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={{
        genderPreference: initialValues?.genderPreference || 'Anyone',
        // canChatNow: initialValues?.canChatNow || "yes",
      }}
      onSubmit={onSubmit}
      validationSchema={basicInfoSchema}
    >
      {({ submitForm, values, errors, touched }) => (
        <>
          <RadioButtonGroup
            id="genderPreference"
            label="Who do you prefer to call you? Select one."
            value={values.genderPreference}
            error={errors.genderPreference}
            touched={touched.genderPreference}
          >
            <Field component={RadioButton} name="genderPreference" id="Anyone" label="Anyone" />
            <Field
              component={RadioButton}
              name="genderPreference"
              id="Female"
              label="I am a female who only wants to speak to another female"
            />
            <Field
              component={RadioButton}
              name="genderPreference"
              id="Male"
              label="I am a male who only wants to speak to another male"
            />
          </RadioButtonGroup>
          {/* <RadioButtonGroup
            id="canChatNow"
            label="Are you ready to speak with someone now?"
            value={values.canChatNow}
            error={errors.canChatNow}
            touched={touched.canChatNow}
          >
            <Field
              component={RadioButton}
              name="canChatNow"
              id="yes"
              label="Yes"
            />
            <Field
              component={RadioButton}
              name="canChatNow"
              id="no"
              label="No, I'll choose a time"
            />
          </RadioButtonGroup> */}
          <NextButton title="Next" onClick={submitForm} />
        </>
      )}
    </Formik>
  );
};

export default FormPagePreferences;
