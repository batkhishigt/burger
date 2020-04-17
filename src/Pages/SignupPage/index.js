import React, { Component } from "react";
import Button from "../../Components/General/Button";
import css from "./Login.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../Components/General/Spinner";
import { Redirect } from "react-router-dom";

class SignupPage extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };
  Signup = () => {
    if (this.state.password1 === this.state.password2) {
      this.props.signupStart(this.state.email, this.state.password1);
    } else {
      this.setState({
        error: "Нууц үг хоорондоо таарахгүй байна!!",
      });
    }
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword1 = (e) => {
    this.setState({ password1: e.target.value });
  };
  changePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };
  render() {
    return (
      <div className={css.Signup}>
        {this.props.userId && <Redirect to="/" />}
        <h1>Бүртгэлийн форм</h1>
        <div>Та өөрийн мэдээллээ оруулна уу</div>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword1}
          type="password"
          placeholder="Нууц үгээ оруулна уу"
        />
        <input
          onChange={this.changePassword2}
          type="password"
          placeholder="Нууц үгээ давтан оруулна уу"
        />
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        {this.props.firebaseError && (
          <div style={{ color: "red" }}>{this.props.firebaseError}</div>
        )}
        {this.props.saving ? <Spinner /> : null}
        <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={this.Signup} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.signupLoginReducer.saving,
    firebaseError: state.signupLoginReducer.firebaseError,
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signupStart: (email, password) =>
      dispatch(actions.signupStart(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
