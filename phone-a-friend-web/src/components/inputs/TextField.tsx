import React from 'react';
import styled from 'styled-components';
import { FieldInputProps, FormikState } from 'formik';
import InputFeedback from './InputFeedback';

type TextFieldProps = {
  label: string;
  field: FieldInputProps<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: FormikState<any>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 6px;
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 14px 10px;
  width: 100%;
  background-color: #ffffff;
  border: none;
`;

const TextField: React.FC<TextFieldProps> = ({ label, field, form: { touched, errors }, ...inputProps }) => {
  return (
    <Wrapper>
      <Label htmlFor={`${label}-id`}>{label}</Label>
      <Input id={`${label}-id`} type="text" {...field} {...inputProps} />
      {touched[field.name] && errors[field.name] && <InputFeedback>{errors[field.name]}</InputFeedback>}
    </Wrapper>
  );
};

export default TextField;
