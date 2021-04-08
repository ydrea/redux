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
    console.log(this.props);
  }

  render() {
    return <div>Reduxing . . .</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return state;
};
export default connect(mapStateToProps, { makeClaim })(List);
