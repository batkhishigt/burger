import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import { Redirect } from "react-router-dom";
class Logout extends Component {
  componentDidMount() {
    this.props.Logout();
  }
  render() {
    return <Redirect to="/" />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
