import React from 'react';
import styled from 'styled-components';
import Media from '../../utils/CustomMedia';
import * as Constants from '../../utils/Constants';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import * as Colors from '../../Colors';

interface Iprops {
  readonly bgColor?: string;
  readonly color?: string;
  readonly isMobile: boolean;
}

const MainDiv = styled.main<Iprops>`
  margin-bottom: ${(props) => (props.isMobile ? '90px' : '70px')};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.bgColor};

  ${Media.greaterThan('mobile')`
    padding-left: ${Constants.OUTSIDE_MARGIN}px;
    padding-right: ${Constants.OUTSIDE_MARGIN}px;
  `}
  ${Media.lessThan('mobile')`
    padding-left: ${Constants.OUTSIDE_MOBILE_MARGIN_PIXELS}px;
    padding-right: ${Constants.OUTSIDE_MOBILE_MARGIN_PIXELS}px;
    padding-top: 30px;
    padding-bottom: 30px;
  `}
  overflow: scroll;
`;

const Wrapper = styled.div<Iprops>`
  display: grid;
  grid-template-columns: ${(props) => (props.isMobile ? '1fr' : '1fr 1fr')};
  color: ${(props) => props.color};
`;

const HeadLine = styled.div<Iprops>`
  padding-bottom: ${(props) => (props.isMobile ? '40px' : '0')};
  & > span {
    font-size: ${(props) => (props.isMobile ? '2.344rem' : '77px')};
    line-height: ${(props) => (props.isMobile ? '2.813rem' : '100px')};
    font-weight: 600;
  }
`;

const Blurb = styled.div<Iprops>`
  font-family: Lora;
  font-size: ${(props) => (props.isMobile ? '1rem' : '1.375rem')};
  line-height: ${(props) => (props.isMobile ? '1.625rem' : '2.25rem')};
  margin-bottom: 30px;
  max-width: ${(props) => !props.isMobile && '565px'};
`;

type Props = {
  bgColor?: string;
  copy: string;
  signUpPath: string;
  isMobile: boolean;
};

const Intro: React.FC<Props> = ({ bgColor, copy, signUpPath, isMobile }) => (
  <MainDiv isMobile={isMobile} bgColor={bgColor}>
    <Wrapper isMobile={isMobile} color={Colors.DARK_BLUE}>
      <HeadLine isMobile={isMobile}>
        {!isMobile ? (
          <span>
            I want to
            <br />
            {copy}
          </span>
        ) : (
          <span>I want to {copy}</span>
        )}
      </HeadLine>

      <div>
        <Blurb isMobile={isMobile} color={Colors.DARK_BLUE}>
          Welcome! We’ll need to ask you a few questions before we have someone reach out to you when you’re ready.
          Please note that we are not offering professional advice, just connecting folks who want to have a chat. For
          mental health problems, grief counseling or any health-related issues, please talk to your primary care doctor
          or another health professional who can connect you to the right services.
        </Blurb>
        <Link to={signUpPath}>
          <Button className={isMobile ? 'mobile-intro-button' : 'intro-button'}>Get Started</Button>
        </Link>
      </div>
    </Wrapper>
  </MainDiv>
);

export default Intro;
