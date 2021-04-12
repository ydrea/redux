import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import {
  fetchAPIPosts,
  // selectPolicy,
  // createPolicy,
  // deletePolicy,
  // makeClaim,
} from "../actions";
import UserSig from "./UserSig";

class List extends Component {
  componentDidMount() {
    this.props.fetchAPIPosts();
  }

  renderList = () => {
    //return new array from renderList
    return this.props.posts.map((i) => {
      //print out jsx
      return (
        <div key={i.id}>
          <h5>{i.title}</h5>
          <p>{i.body}</p>

          <div>
            <UserSig userId={i.userId} />
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.posts);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchAPIPosts })(List);
