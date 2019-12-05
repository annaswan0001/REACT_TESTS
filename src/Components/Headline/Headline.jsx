import React, { Component } from "react";
import PropTypes from "prop-types";

class Hedline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, desc } = this.props;

    if(!header){
      return null
    }
    
    return (
      <div data-test="HeadLineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

Hedline.propTypes = {};

export default Hedline;
