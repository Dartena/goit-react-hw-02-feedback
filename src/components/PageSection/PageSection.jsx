import PropTypes from "prop-types";
import { Component } from "react";
import { Section, Title } from "../styles/styled";

class PageSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  render() {
    const { title, children } = this.props;
    return (
      <Section>
        <Title>{title}</Title>
        {children}
      </Section>
    );
  }
}

export default PageSection;
