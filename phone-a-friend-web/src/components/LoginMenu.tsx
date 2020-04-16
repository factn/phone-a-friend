import React from 'react'
import styled from 'styled-components';
import * as Colors from '../Colors';


interface Iprops {
    bgColor: string;
}
const MainDiv = styled.div<Iprops>`
    color:white;
    background: ${props => props.bgColor};
    height: 469px;
    width: 416px;
    padding: 40px 50px 0 50px;
`;


const LoginMenu = () => {
    const handleSubmit = () => {
        console.log('submit')
    }

    const Form = styled.form`
    display:grid;
    gap: 20px;
    `;

const Label = styled.label`
    display:grid;
    gap: 20px;
    font-size: 1rem;
    font-family: Poppins;
`;

const Input = styled.input`
   width: 316px;
   height: 50px;

  background: white;
  color: #13273E;
  font-family: Lora;
  font-size: 1.25rem;
  border: 0;

`;

const Submit = styled(Input)`
   border: 3px solid white;
   background: transparent;
   color: white;
   font-family: Poppins;
`;

type SelectProps ={
    color: string;
}
const Select = styled.select<SelectProps>`
 font-family: Poppins;
    width: 316px;
   height: 50px;
   border:0;
   border-radius:0;
   color: ${props => props.color};
   > option {
        font-size: var(--mobile-button-font);
   }
`;



    return (
        <MainDiv bgColor={Colors.DARK_BLUE}>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Select an account
                    <Select color={Colors.DARK_BLUE}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
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
                <Submit className='button-font' type="submit" value="Log in" />
            </Form>
        </MainDiv>
    )
}

export default LoginMenu;