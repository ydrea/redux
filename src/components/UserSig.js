import React, { Component } from "react";
import { connect } from "react-redux";

class UserSig extends Component {
  // componentDidMount() {
  //   this.props.fetchAPIUsers(this.props.userId);
  // }

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
