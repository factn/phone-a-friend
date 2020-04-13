import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: red;
  margin-left: 8px;
`;

type InputFeedbackProps = React.HTMLAttributes<HTMLSpanElement>;

const InputFeedback: React.FC<PropsWithChildren<InputFeedbackProps>> = ({ children, ...spanProps }) => (
  <ErrorMessage {...spanProps}>{children}</ErrorMessage>
);

// Input feedback
// const InputFeedback: React.FC<{ error: string }> = ({ error }) =>
// error ? <ErrorMessage>{error}</ErrorMessage> : null;

export default InputFeedback;
