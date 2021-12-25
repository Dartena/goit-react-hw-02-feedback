import styled from "styled-components";

const Title = styled.h2`
  margin-bottom: 6px;
`;

const Section = styled.section``;

const FeedbackBtn = styled.button`
  padding: 6px 12px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: inherit;
  :hover,
  :focus {
    background-color: #ff702d;
    color: #fff;
  }
`;
const Counter = styled.p`
  margin-bottom: 0;
  margin-top: 0;
`;

const FeedbackList = styled.ul`
  display: flex;
  justify-content: center;
`;

const StatisticsList = styled.ul``;

const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const NotificationText = styled.p``;

export {
  Title,
  Section,
  FeedbackBtn,
  Counter,
  FeedbackList,
  StatisticsList,
  ListItem,
  NotificationText,
};
