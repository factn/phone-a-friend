import React from 'react';
import { FieldProps } from 'formik';
import InputFeedback from './InputFeedback';
import styled from 'styled-components';

type CheckboxProps = {
  label?: React.ReactNode;
} & FieldProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-areas:
    'input label'
    'error error';
  margin-bottom: 16px;

  label {
    grid-area: label;
    font-size: 12px;
    color: #13273e;
  }

  :nth-child(3) {
    grid-area: error;
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({ field, form: { touched, errors }, label, ...inputProps }) => {
  return (
    <Wrapper>
      <input id={field.name} {...field} {...inputProps} />
      {label}
      {touched[field.name] && errors[field.name] && (
        <InputFeedback style={{ gridArea: 'error' }}>{errors[field.name]}</InputFeedback>
      )}
    </Wrapper>
  );
};

export default Checkbox;
