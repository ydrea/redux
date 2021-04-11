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
        </div>
      );
    });
  };

  render() {
    console.log(this.props.posts);
    return (
      <div>
        nek
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchAPIPosts })(List);
