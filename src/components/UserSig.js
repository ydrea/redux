import React, { Component } from "react";
import { connect } from "react-redux";
import {
  // fetchAPIPosts,
  selectPolicy,
  // createPolicy,
  // deletePolicy,
  // makeClaim,
} from "../actions";

class UserSig extends Component {
  componentDidMount() {
    this.props.selectPolicy(this.props.userId);
  }

  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);
    if (!user) {
      return <p>nix</p>;
    }
    return <p> {user.name} </p>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { selectPolicy })(UserSig);
