import PropTypes from "prop-types";
import { Component } from "react";
import { NotificationText } from "../styles/styled";

class Notification extends Component {
  static propTypes = { message: PropTypes.string.isRequired };
  render() {
    const { message } = this.props;
    return <NotificationText>{message}</NotificationText>;
  }
}

export default Notification;
