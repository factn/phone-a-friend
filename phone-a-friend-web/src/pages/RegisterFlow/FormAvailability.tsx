import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { FormPage } from "../UserSignUpManager/UserSignUpManager";
import {
  Availability,
  emptyAvailability,
  TimePeriod,
  TIME_PERIOD_LOOKUP,
} from "../../model/availability";
import CustomSelect from "../../components/inputs/CustomSelect";
import { capitalizeFirstLetter } from "../../utils/string.utils";
import Checkbox from "../../components/inputs/Checkbox";

type FormAvailabilityProps = {
  availability: Availability;
  acceptTerms: boolean;
};

type FlattenedFormAvailabilityProps = Availability & { acceptTerms: boolean };

type AvailabilityOption = {
  label: TimePeriod;
  value: string;
};

const availabilityOptions: AvailabilityOption[] = Object.entries(
  TIME_PERIOD_LOOKUP
).map(([key, timePeriod]) => ({
  label: timePeriod,
  value: key,
}));

const basicInfoSchema = Yup.object().shape({
  acceptTerms: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required"
  ),
});

const availabilityValidation = (values: FlattenedFormAvailabilityProps) => {
  const isEmpty = (array: any[]) => array.length === 0;
  if (
    isEmpty(values.monday) &&
    isEmpty(values.tuesday) &&
    isEmpty(values.wednesday) &&
    isEmpty(values.thursday) &&
    isEmpty(values.friday) &&
    isEmpty(values.saturday) &&
    isEmpty(values.sunday)
  ) {
    return {
      monday: "Must select at least one day's availability",
      tuesday: "Must select at least one day's availability",
      wednesday: "Must select at least one day's availability",
      thursday: "Must select at least one day's availability",
      friday: "Must select at least one day's availability",
      saturday: "Must select at least one day's availability",
      sunday: "Must select at least one day's availability",
    };
  } else return {};
};

const FormAvailability: React.FC<FormPage<FormAvailabilityProps>> = ({
  onSubmit,
  initialValues,
}) => {
  const handleSubmit = ({
    acceptTerms,
    ...days
  }: FlattenedFormAvailabilityProps) => {
    onSubmit({
      availability: {
        ...days,
      },
      acceptTerms,
    });
  };
  return (
    <Formik
      initialValues={{
        ...(initialValues?.availability || { ...emptyAvailability }),
        acceptTerms: initialValues?.acceptTerms || false,
      }}
      onSubmit={handleSubmit}
      validationSchema={basicInfoSchema}
      validate={availabilityValidation}
    >
      {({ submitForm, values }) => (
        <>
          {Object.keys(values)
            .filter((fieldKey) => fieldKey !== "acceptTerms")
            .map((day) => (
              <Field
                label={`${capitalizeFirstLetter(day)} availability`}
                key={day}
                name={day}
                options={availabilityOptions}
                component={CustomSelect}
                placeholder="-"
                isMulti={true}
              />
            ))}

          <Field
            type="checkbox"
            name="acceptTerms"
            label={
              <label htmlFor="acceptTerms">
                I agree this service is not a replacement for professional
                medical services. I agree to the{" "}
                <a href="/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                .
              </label>
            }
            component={Checkbox}
          />
          <button onClick={submitForm}>Submit</button>
        </>
      )}
    </Formik>
  );
};

export default FormAvailability;
