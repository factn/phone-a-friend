import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../../contexts/AppContext";
import useVolunteer from "../../hooks/useVolunteer";
import BaseAccountLayout from "../../layouts/BaseAccountLayout";
import { isEmptyObject } from "../../utils/object.utils";
import { VOLUNTEER_BACKGROUND_COLOR } from "../../Colors";

const TopDivContainer = styled.div`
  background-color: ${VOLUNTEER_BACKGROUND_COLOR};
  padding: 0 72px;
  display: flex;
  flex-direction: column;
`;

const TabItem = styled.div`
  align-self: flex-start;
  > span {
    font-size: 16px;
  }
`;

const VolunteerAccountPage = () => {
  const { state } = useStateValue();
  const history = useHistory();

  const { isFetching } = useVolunteer(
    (v) => ({}),
    () => history.replace("/register/volunteer")
  );

  return (
    <>
      {!isFetching && !isEmptyObject(state.currentVolunteer) && (
        <BaseAccountLayout>
          <TopDivContainer>
            <h1>Welcome back, {state.currentVolunteer.name.split(" ")[0]}!</h1>
            <TabItem>
              <span>Account</span>
            </TabItem>
          </TopDivContainer>
          <div>hi</div>
        </BaseAccountLayout>
      )}
    </>
  );
};

export default VolunteerAccountPage;
