import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormPage } from "../UserSignUpManager/UserSignUpManager";
import { Gender } from "../../model/gender";
import NextButton from "../../components/buttons/NextButton";
import TextAreaField from "../../components/inputs/TextAreaField";
import InputFeedback from "../../components/inputs/InputFeedback";

type UserFormPageTwo = {
  gender: Gender;
  languages: string[];
};

type UserForm = {
  gender: Gender | "";
  languages: string;
};

const basicInfoSchema = Yup.object().shape({
  gender: Yup.string()
    .oneOf(["Male", "Female"], "Must select a gender")
    .required("Gender is required"),
  languages: Yup.string().required("Languages is required"),
});

const FormPageGenderLanguages: React.FC<FormPage<UserFormPageTwo>> = ({
  onSubmit,
  initialValues,
}) => {
  const transformLanguagesBeforeSaving = (values: UserForm) => {
    const finalValues: UserFormPageTwo = {
      gender: values.gender as Gender,
      languages: values.languages.split(","),
    };
    onSubmit(finalValues);
  };
  return (
    <Formik
      initialValues={{
        gender: initialValues?.gender || "",
        languages: initialValues?.languages.join(", ") || "",
      }}
      onSubmit={transformLanguagesBeforeSaving}
      validationSchema={basicInfoSchema}
    >
      {({ submitForm }) => (
        <>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: "block", marginBottom: 6 }}>
              How do you identify your gender?
            </label>
            <Field
              name="gender"
              placeholder="Your gender"
              label="How do you identify your gender?"
              component="select"
              style={{
                padding: "14px 10px",
                width: "100%",
                backgroundColor: "#ffffff",
                border: "none",
              }}
            >
              <option style={{ color: "blue" }} value="" disabled>
                Your gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage name="gender" component={InputFeedback} />
          </div>
          <Field
            name="languages"
            placeholder="List your languages with a comma seperating each one. E.g: Spanish, Chinese, Portuguese"
            label="What languages do you speak other than English?"
            type="textarea"
            rows="4"
            component={TextAreaField}
          />
          <NextButton title="Next" onClick={submitForm} />
        </>
      )}
    </Formik>
  );
};

export default FormPageGenderLanguages;
