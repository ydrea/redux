import React, { Component } from "react";
import { connect } from "react-redux";

class UserSig extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <p>nix</p>;
    }
    return <p> {user.name} </p>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { users: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserSig);
