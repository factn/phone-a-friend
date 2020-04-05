import React from "react";
import styled from "styled-components";
import * as Constants from "../../utils/Constants";

interface Iprops {
    h?: number;
  }

const MainDiv = styled.div<Iprops>`
  padding: 5% 20% 5% 20%;
  margin-bottom: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const CopyDiv = styled.div`
  font-family: "Lora";
  font-size: 1.375rem;
  line-height: 2.25rem;
  text-align: center;
  width: 894px;
`;

const Disclaimer = styled.div`
    padding-top: 1rem;
  font-family: "Lora";
  font-size: 0.875rem;
`;


const MainJumbo = () => (
  <MainDiv>
    <h1>Hi! Let's Connect</h1>
    <CopyDiv>
      We understand how important human connection is, especially in times of
      isolation and uncertainty. Whether you want to phone someone for a chat or
      take a call from someone reaching out, PhoneAFriend.care will get you set
      up in no time.
    </CopyDiv>
    <Disclaimer>Note - we do not offer professional advice</Disclaimer>
  </MainDiv>
);
MainJumbo.whyDidYouRender = true;
export default MainJumbo;
