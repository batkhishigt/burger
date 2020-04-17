import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import css from "./style.module.css";
import Toolbar from "../../Components/Toolbar";
import BurgerPage from "../BurgerPage/";
import Sidebar from "../../Components/Sidebar";
import OrderPage from "../OrderPage";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import Logout from "../../Components/Logout";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }
  toggleSidebar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");
    if (token) {
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        this.props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        this.props.logout();
      }
    }
  }
  render() {
    return (
      <div>
        <Toolbar toggleSidebar={this.toggleSidebar} />
        <Sidebar
          show={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <main className={css.Content}>
          {this.props.userId ? (
            <Switch>
              <Route path="/ship" component={ShippingPage} />
              <Route path="/orders" component={OrderPage} />
              <Route path="/logout" component={Logout} />
              <Route path="/" component={BurgerPage} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Redirect to="/login" />
            </Switch>
          )}
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(actions.logout()),
    autoLogoutAfterMillisec: (ms) =>
      dispatch(actions.autoLogoutAfterMillisec(ms)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
