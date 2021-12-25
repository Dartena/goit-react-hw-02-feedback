import { Component } from "react";
import PropTypes from "prop-types";
import { FeedbackBtn, FeedbackList, ListItem } from "../styles/styled";

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickHandler: PropTypes.func.isRequired,
  };

  upperCaseFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  render() {
    const { options, onClickHandler } = this.props;
    return (
      <FeedbackList>
        {options.map((option) => (
          <ListItem key={option}>
            <FeedbackBtn name={option} onClick={onClickHandler}>
              {this.upperCaseFirst(option)}
            </FeedbackBtn>
          </ListItem>
        ))}
      </FeedbackList>
    );
  }
}

export default FeedbackOptions;
