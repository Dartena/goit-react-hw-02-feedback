import { Component, Fragment } from "react";
import { BtnContainer, Counter, FeedbackBtn, Title } from "./styles/styled";

class Feedback extends Component {
  feedbackHandler = (event) => {
    const { name } = event.target;
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return `${Math.floor(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  }

  render() {
    console.log(this.countTotalFeedback());
    return (
      <Fragment>
        <Title>Please leave feedback</Title>
        <BtnContainer onClick={this.feedbackHandler}>
          <FeedbackBtn type="button" name="good">
            Good
          </FeedbackBtn>
          <FeedbackBtn type="button" name="neutral">
            Neutral
          </FeedbackBtn>
          <FeedbackBtn type="button" name="bad">
            Bad
          </FeedbackBtn>
        </BtnContainer>
        <Title>Statistics</Title>
        <Counter>Good: {this.state.good}</Counter>
        <Counter>Neutral: {this.state.neutral}</Counter>
        <Counter>Bad: {this.state.bad}</Counter>
        <Counter>Total: {this.countTotalFeedback()}</Counter>
        <Counter>
          Positive feedback: {this.countPositiveFeedbackPercentage()}
        </Counter>
      </Fragment>
    );
  }
}

export default Feedback;
