import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import media from "styled-media-query";

type BaseFormLayoutProps = {
  title: string;
  step: number;
  totalSteps: number;
};

const BaseFormLayoutWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    "message"
    "form";
  padding: 24px;
  background-color: #f8b99c;

  ${media.greaterThan("medium")`
    grid-template-areas: "message form"; 
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100%;
    flex-grow: 1;
    gap: 48px;
    padding: 24px 48px;
    
    > {
      height: 100%;
    }
  `}
`;

const StepCounter = styled.h4`
  margin: 0;
  ${media.greaterThan("medium")`
    font-size: 24px;
  `}
`;

const Title = styled.h2`
  ${media.greaterThan("medium")`
    font-size: 2.2em;
  `}
`;

const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const BaseFormLayout: React.FC<PropsWithChildren<BaseFormLayoutProps>> = ({
  title,
  step,
  totalSteps,
  children,
}) => {
  return (
    <BaseFormLayoutWrapper>
      <div>
        <progress value={step} max={totalSteps} />
        <StepCounter>
          Step {step} of {totalSteps}
        </StepCounter>
        <Title>{title}</Title>
      </div>
      <FormWrapper>{children}</FormWrapper>
    </BaseFormLayoutWrapper>
  );
};

export default BaseFormLayout;
