import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormPage } from '../UserSignUpManager/UserSignUpManager';
import { Availability, emptyAvailability, availabilityOptions } from '../../model/availability';
import CustomSelect from '../../components/inputs/CustomSelect';
import { capitalizeFirstLetter } from '../../utils/string.utils';
import Checkbox from '../../components/inputs/Checkbox';
import FormButton from '../../components/buttons/FormButton';

type FormAvailabilityProps = {
  localTimeAvailability: Availability;
  acceptTerms: boolean;
};

type FlattenedFormAvailabilityProps = Availability & { acceptTerms: boolean };

const basicInfoSchema = Yup.object().shape({
  acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
});

const availabilityValidation = (values: FlattenedFormAvailabilityProps) => {
  const isEmpty = <T extends unknown>(array: T[]) => array.length === 0;
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

const FormAvailability: React.FC<FormPage<FormAvailabilityProps>> = ({ onSubmit, initialValues, options }) => {
  const handleSubmit = ({ acceptTerms, ...days }: FlattenedFormAvailabilityProps) => {
    onSubmit({
      localTimeAvailability: {
        ...days,
      },
      acceptTerms,
    });
  };
  return (
    <Formik
      initialValues={{
        ...(initialValues?.localTimeAvailability || { ...emptyAvailability }),
        acceptTerms: initialValues?.acceptTerms || false,
      }}
      onSubmit={handleSubmit}
      validationSchema={basicInfoSchema}
      validate={availabilityValidation}
    >
      {({ submitForm, values }) => (
        <>
          {Object.keys(values)
            .filter((fieldKey) => fieldKey !== 'acceptTerms')
            .map((day) => (
              <Field
                label={`${capitalizeFirstLetter(day)} availability (Select all slots that apply)`}
                key={day}
                isDisabled={options?.isDisabled || false}
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
                I agree this service is not a replacement for professional medical services. I agree to the{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                .
              </label>
            }
            component={Checkbox}
          />
          <FormButton onClick={submitForm} title={options?.submitMessage || 'Submit'} />
        </>
      )}
    </Formik>
  );
};

export default FormAvailability;
