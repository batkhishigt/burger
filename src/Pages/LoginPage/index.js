import React, { Component } from "react";
import Button from "../../Components/General/Button";
import css from "./Login.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../Components/General/Spinner";
import { Redirect } from "react-router-dom";
class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };
  login = () => {
    this.props.login(this.state.email, this.state.password);
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Redirect to="/orders" />}
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="Нууц үг"
        />
        {this.props.firebaseError && (
          <div style={{ color: "red" }}>{this.props.firebaseError} </div>
        )}
        {this.props.logginIn ? <Spinner /> : null}
        <Button text="ЛОГИН" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logginIn: state.signupLoginReducer.logginIn,
    firebaseError: state.signupLoginReducer.firebaseError,
    firebaseErrorCode: state.signupLoginReducer.firebaseErrorCode,
    userId: state.signupLoginReducer.userId,
  };
};
const mapDipatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(LoginPage);