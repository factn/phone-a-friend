import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormPage } from "../UserSignUpManager/UserSignUpManager";
import NextButton from "../../components/buttons/NextButton";
import TextAreaField from "../../components/inputs/TextAreaField";

type FormPageIntroductionProps = {
  introduction: string;
};

const basicInfoSchema = Yup.object().shape({
  introduction: Yup.string().required("Introduction is required")
});

const FormPageIntroduction: React.FC<FormPage<FormPageIntroductionProps>> = ({
  onSubmit,
  initialValues
}) => {
  return (
    <Formik
      initialValues={{
        introduction: initialValues?.introduction || ""
      }}
      onSubmit={onSubmit}
      validationSchema={basicInfoSchema}
    >
      {({ submitForm }) => (
        <>
          <Field
            name="introduction"
            placeholder={`Your message. (Ex. "Hi! I look forward to speaking with you. It's been tough keeping busy. I'd love to hear how you're staying focused."`}
            label="Write a short introduction to your caller"
            rows="8"
            component={TextAreaField}
          />
          <NextButton title="Next" onClick={submitForm} />
        </>
      )}
    </Formik>
  );
};

export default FormPageIntroduction;
