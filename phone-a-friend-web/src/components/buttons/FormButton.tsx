import React from 'react';
import styled from 'styled-components';
import { DARK_BLUE } from '../../Colors';

type FormButtonProps = {
  title: string;
  onClick: () => void;
};

const StyledFormButton = styled.button`
  padding: 8px 32px;
  background: transparent;
  border: 3px solid ${DARK_BLUE};
  font-family: 'Poppins';
  margin-bottom: 16px;
  cursor: pointer;

  &:active {
    background-color: ${DARK_BLUE};
  }
`;

const FormButton: React.FC<FormButtonProps> = ({ title, onClick }) => {
  return <StyledFormButton onClick={onClick}>{title}</StyledFormButton>;
};

export default FormButton;
