import React, { Component } from "react";
import { connect } from "react-redux";
import {
  // selectPolicy,
  // createPolicy,
  // deletePolicy,
  makeClaim,
} from "../actions";

class List extends Component {
  componentDidMount() {
    this.props.makeClaim();
  }

  render() {
    return <div>Reduxing . . .</div>;
  }
}

const getState = (state) => {
  const {key: props.key } = state;
};
export default connect(getState, { makeClaim })(List);
