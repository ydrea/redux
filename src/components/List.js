import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import {
  // fetchAPIPosts,
  selectPolicy,
  // createPolicy,
  // deletePolicy,
  // makeClaim,
} from "../actions";

class List extends Component {
  componentDidMount() {
    this.props.selectPolicy();
    console.log(this.props);
  }

  renderList = () => {
    //return new array from renderList
    return this.props.markers.map((i) => {
      //print out jsx
      return (
        <div key={i.title}>
          <h5>{i.title}</h5>
          <p>
            {i.description}:{i.coordinate.latitude},{i.coordinate.longitude}
          </p>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => ({
  // name: state.name,
  markers: state.markers,
});
export default connect(mapStateToProps, { selectPolicy })(List);
