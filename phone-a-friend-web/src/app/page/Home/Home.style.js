import styled from "styled-components";
import Button from "../../component/Button";
import { Link } from "react-router-dom";

export const Header = styled.div`
  height: 100%;
  display: flex;
  padding: 0 25px;
`;

export const HeaderSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  font-family: Arimo;
  color: #150e60;
  > a {
    color: inherit;
    text-decoration: none;
  }
`;

export const BigLogo = styled.div`
  background-color: #ffefef;
  > svg {
    height: 500px;
  }
`;
export const MissionText = styled.h1`
  font-family: Arimo;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 24px;
  color: #150e60;
  margin: 24px;
`;

export const StyledHomeButton = styled(Button)`
  height: 79px;
  width: 300px;
  margin: 24px auto;
  display: block;
  border-radius: 100px;
  font-size: 24px;
  line-height: 40px;
`;

export const StyledLink = styled(Link)`
  font-family: Arimo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #150e60;
  text-decoration: none;
`;
