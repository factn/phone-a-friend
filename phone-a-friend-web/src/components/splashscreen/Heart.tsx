import React from 'react';
import styled from 'styled-components';
import HeartImage from '../../images/heart.svg';

const MainDiv = styled.div`
  place-self: center;
`;
const Heart = () => (
  <MainDiv>
    <img src={HeartImage} alt="hand" />
  </MainDiv>
);
export default Heart;
