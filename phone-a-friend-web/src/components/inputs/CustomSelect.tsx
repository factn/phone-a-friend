import { FieldProps } from "formik";
import React from "react";
import Select from "react-select";
import { OptionsType, ValueType } from "react-select";
import styled from "styled-components";
import InputFeedback from "./InputFeedback";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: OptionsType<Option>;
  isMulti?: boolean;
  placeholder?: string;
  label?: string;
  isDisabled?: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const CustomSelect = ({
  label,
  placeholder,
  field,
  form,
  options,
  isDisabled,
  isMulti = false,
}: CustomSelectProps) => {
  const onChange = (option: ValueType<Option | Option[]>) => {
    if (option === null) {
      option = [];
    }
    form.setFieldValue(
      field.name,
      !option
        ? []
        : isMulti
        ? (option as Option[]).map((item: Option) => item.value)
        : (option as Option).value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <Wrapper>
      <label>{label}</label>
      <Select
        isDisabled={isDisabled}
        name={field.name}
        value={getValue()}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
      />
      {form.touched[field.name] && form.errors[field.name] && (
        <InputFeedback>{form.errors[field.name]}</InputFeedback>
      )}
    </Wrapper>
  );
};

export default CustomSelect;
