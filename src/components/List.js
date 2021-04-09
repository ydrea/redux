import React, { Component } from "react";
import { connect } from "react-redux";
import {
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

  render() {
    const renderList = this.props.markers.map((i) => (
      <div key={i.title}>
        <h5>{i.title}</h5>
        <p>
          {i.description}:{i.coordinate.latitude},{i.coordinate.longitude}
        </p>
      </div>
    ));
    return <div>{renderList}</div>;
  }
}

const mapStateToProps = (state) => ({
  name: state.name,
  markers: state.markers,
});
export default connect(mapStateToProps, { selectPolicy })(List);
