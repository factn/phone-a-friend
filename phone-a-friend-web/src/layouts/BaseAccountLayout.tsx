import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { OUTSIDE_MARGIN } from "../utils/Constants";
import media from "styled-media-query";

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  display: grid;
  grid-template-rows: 150px 1fr;

  ${media.greaterThan("medium")`
  padding: 0 ${OUTSIDE_MARGIN};
  `}
`;

const TopDivContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => `${props.backgroundColor}`};
  display: flex;
  padding: 24px 24px 0;
  flex-direction: column;
  h2 {
    font-size: 1.5em;
  }
  ${media.greaterThan("medium")`
    padding: 24px 72px 0;
  `}
`;

const TabsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const ChildrenContainer = styled.div`
  padding: 24px;
  ${media.greaterThan("medium")`
  padding: 24px 72px 24px;
  `}
`;

type BaseAccountLayout = {
  tabs: string[];
  onTabClick: (label: string) => void;
  selectedTab: string;
  backgroundColor: string;
  title: string;
};

const BaseAccountLayout: React.FC<PropsWithChildren<BaseAccountLayout>> = ({
  children,
  tabs,
  onTabClick,
  backgroundColor,
  title,
  selectedTab,
}) => {
  return (
    <Container>
      <TopDivContainer backgroundColor={backgroundColor}>
        <h2>{title}</h2>
        <TabsContainer>
          {tabs.map((tab) => (
            <TabItem
              key={tab}
              label={tab}
              selected={selectedTab === tab}
              onClick={() => onTabClick(tab)}
            />
          ))}
        </TabsContainer>
      </TopDivContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

type TabItemProps = {
  label: string;
  onClick: () => void;
  selected: boolean;
};

const Tab = styled.div`
  cursor: pointer;
  margin-right: 32px;
  > span {
    display: block;
    margin-bottom: 10px;
  }

  > div {
    height: 8px;
  }
`;

const TabItem: React.FC<TabItemProps> = ({ label, selected, onClick }) => {
  return (
    <Tab onClick={onClick}>
      <span>{label}</span>
      <div style={selected ? { backgroundColor: "#0d2138" } : {}} />
    </Tab>
  );
};

export default BaseAccountLayout;
