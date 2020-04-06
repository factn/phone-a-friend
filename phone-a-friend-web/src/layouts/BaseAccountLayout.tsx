import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { OUTSIDE_MARGIN } from "../utils/Constants";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-right: ${OUTSIDE_MARGIN};
  padding-left: ${OUTSIDE_MARGIN};
  display: grid;
  grid-template-rows: 150px 1fr;
`;

const BaseAccountLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BaseAccountLayout;
