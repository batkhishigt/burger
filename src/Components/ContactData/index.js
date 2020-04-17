import React from "react";
import css from "./Contact.module.css";
import Button from "../General/Button";
//import axios from "../../axios-orders";
import Spinner from "../General/Spinner";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as action from "../../redux/actions/orderActions";
class ContactData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      city: null,
      street: null,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  saveOrder = () => {
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
      address: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
      userId: this.props.userId,
    };
    this.props.saveOrderAction(order);
  };

  componentDidUpdate() {
    if (
      this.props.newOrderStatus.finished &&
      !this.props.newOrderStatus.error
    ) {
      this.props.history.replace("/orders");
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className={css.ContactData}>
        <h1>{this.props.totalPrice}</h1>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeHandler}
              type="text"
              name="name"
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changeHandler}
              type="text"
              name="street"
              placeholder="Таны хаяг"
            />
            <input
              onChange={this.changeHandler}
              type="text"
              name="city"
              placeholder="Таны хот"
            />
            <Button
              clicked={this.saveOrder}
              text="ЗАХИАЛГЫГ ИЛГЭЭХ"
              btnType="Success"
            />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    totalPrice: state.burgerReducer.totalPrice,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderAction: (newOrder) => dispatch(action.saveOrder(newOrder)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
