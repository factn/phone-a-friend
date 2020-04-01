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
    grid-template-columns: repeat(1fr);
  `}
`;

const StepCounter = styled.h4`
  margin: 0;
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
        <StepCounter>Step {step} of 5</StepCounter>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </BaseFormLayoutWrapper>
  );
};

export default BaseFormLayout;
