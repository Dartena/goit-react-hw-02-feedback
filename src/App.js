import { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import PageSection from "./components/PageSection/PageSection";
import Statistics from "./components/Statistics/Statistics";

const options = ["good", "neutral", "bad"];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (event) => {
    const { name } = event.target;
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="App">
        <PageSection
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={options}
              onClickHandler={this.addFeedback}
            />
          }
        />
        <PageSection
          title="Statistics"
          children={
            total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )
          }
        />
      </div>
    );
  }
}

export default App;
