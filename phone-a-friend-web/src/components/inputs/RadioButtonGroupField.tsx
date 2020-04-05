import React from "react";
import styled from "styled-components";
import InputFeedback from "./InputFeedback";

// Radio input
const RadioButton: React.FC<any> = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={"radio-button"}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

const RadioButtonGroupFieldSet = styled.fieldset`
  margin: 0;
  border: none;
  padding: none;
`;

const Legend = styled.legend`
  margin-bottom: 6px;
  display: block;
  font-weight: bold;
`;

// Radio group
const RadioButtonGroup: React.FC<any> = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children,
}) => {
  // const classes = classNames(
  //   "input-field",
  //   {
  //     "is-success": value || (!error && touched), // handle prefilled or user-filled
  //     "is-error": !!error && touched
  //   },
  //   className
  // );
  return (
    <RadioButtonGroupFieldSet>
      <Legend>{label}</Legend>
      {children}
      {touched && error && <InputFeedback>{error}</InputFeedback>}
    </RadioButtonGroupFieldSet>
  );
};

export { RadioButton, RadioButtonGroup };
