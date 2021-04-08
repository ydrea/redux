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
  // console.log(state);
};
export default connect(null, { makeClaim })(List);
