import React from "react";
import './Title.css';

class Title extends React.Component {
  render() {
    let CustomTag = 'h1';
    let className = 'c-title';

    if (this.props.type !== undefined) {
      className += ` c-title__${this.props.type}`;
    }

    if (this.props.level !== undefined) {
      CustomTag = `h${this.props.level}`;
      className += ` t-heading-${this.props.level}`;
    }

    className += ' t-uppercase';

    return <CustomTag className={className}>
      {this.props.children}
    </CustomTag>;
  }
}

export default Title