import React from "react";
import PropTypes from "prop-types";

import { Link, withRouter } from "react-router-dom";

import { useSelector, connect } from "react-redux";
import { useFirestoreConnect, firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { compose } from "redux";

import { ReactComponent as Logo } from "../../../img/logo.svg";
import { Page, Card } from "../../layout";
import { User } from "../../model";
import { MissionCard, Button } from "../../component";

import { BigLogo, MissionText, StyledHomeButton, StyledLink } from "./Home.style";

const HomePage = ({ history, ...rest }) => {
  const missions = useSelector((state) => state.firestore.ordered.missions);
  const isEmpty = useSelector((state) => state.firebase.auth.isEmpty);

  return (
    <Page>
      {isEmpty ? (
        <>
          <BigLogo>
            <Logo />
          </BigLogo>
          <MissionText>Global Community, Local Mutual Aid</MissionText>
          <StyledHomeButton rounded text="Sign In/Up" onClick={() => history.push("/login")} />
          <StyledHomeButton rounded text="View Missons" onClick={() => history.push("/missions")} />
          <StyledHomeButton
            onClick={() => history.push("/request/create")}
            rounded
            text="Request Help"
            secondary
          />
          <StyledLink to="/about">About</StyledLink>
        </>
      ) : (
        <>
          <StyledHomeButton
            onClick={() => history.push("/request/create")}
            rounded
            text="Request Help"
            secondary
          />
          {missions && (
            <StyledHomeButton
              rounded
              text="View Other Missons"
              onClick={() => history.push("/missions")}
            />
          )}
          {missions?.map((mission) => (
            <Card key={mission.id}>
              <MissionCard mission={mission} />
              <div>
                <Button
                  text="Details"
                  onClick={() => {
                    history.push(`/missions/${mission.id}`);
                  }}
                />
              </div>
            </Card>
          ))}
        </>
      )}
    </Page>
  );
};

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (!props.auth.uid) return [];
    return [{ collection: "missions", where: [["assignedId", "==", props.auth.uid]] }];
  })
)(withRouter(HomePage));
