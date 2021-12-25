import PropTypes from "prop-types";
import { Component } from "react";
import { Counter, ListItem, StatisticsList } from "../styles/styled";

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatisticsList>
        <ListItem>
          <Counter>Good: {good}</Counter>
        </ListItem>
        <ListItem>
          <Counter>Neutral: {neutral}</Counter>
        </ListItem>
        <ListItem>
          <Counter>Bad: {bad}</Counter>
        </ListItem>
        <ListItem>
          <Counter>Total: {total}</Counter>
        </ListItem>
        <ListItem>
          <Counter>Positive feedback: {positivePercentage}%</Counter>
        </ListItem>
      </StatisticsList>
    );
  }
}

export default Statistics;
