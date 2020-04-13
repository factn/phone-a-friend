import React from 'react';
import styled from 'styled-components';
import { FieldInputProps, FormikState } from 'formik';
import InputFeedback from './InputFeedback';

type TextAreaFieldProps = {
  label: string;
  field: FieldInputProps<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: FormikState<any>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 6px;
  display: block;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  padding: 14px 10px;
  width: 100%;
  background-color: #ffffff;
  border: none;
`;

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, field, form: { touched, errors }, ...inputProps }) => {
  return (
    <Wrapper>
      <Label htmlFor={`${label}-id`}>{label}</Label>
      <TextArea id={`${label}-id`} {...field} {...inputProps} />
      {touched[field.name] && errors[field.name] && <InputFeedback>{errors[field.name]}</InputFeedback>}
    </Wrapper>
  );
};

export default TextAreaField;
