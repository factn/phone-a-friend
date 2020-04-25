import React from 'react';
import styled from 'styled-components';
import * as Colors from '../Colors';

interface Iprops {
  bgColor: string;
}
const MainDiv = styled.div<Iprops>`
  font-family: unset;
  color: white;
  background: ${(props) => props.bgColor};
  height: 469px;
  width: 416px;
  padding: 40px 50px 0 50px;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const Label = styled.label`
  display: grid;
  gap: 20px;
`;

const Input = styled.input`
  width: 316px;
  height: 50px;
  background: white;
  color: #13273e;
  font-family: Lora;
  font-size: 1.25rem;
  border: 0;
`;

const Submit = styled(Input)`
  border: 3px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  width: 316px;
  height: 50px;
  border: 0;
  border-radius: 0 !important;
  font-size: 1.125rem;
  font-family: Poppins;
`;

const LoginMenu = () => {
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <MainDiv bgColor={Colors.DARK_BLUE}>
      <Form onSubmit={handleSubmit}>
        <Label>
          Select an account
          <Select className="select-css">
            <option defaultValue="take">Take a Call</option>
            <option value="receive">Receive a Call</option>
          </Select>
        </Label>
        <Label>
          Username
          <Input type="text" name="user" id="" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" id="" />
        </Label>
        <Submit className="button-font" type="submit" value="Log in" />
      </Form>
    </MainDiv>
  );
};

export default LoginMenu;
