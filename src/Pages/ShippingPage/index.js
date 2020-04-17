import React from "react";
import css from "./ShippingPage.module.css";
import Burger from "../../Components/Burger";
import Button from "../../Components/General/Button";
import { Route } from "react-router-dom";
import ContactData from "../../Components/ContactData";
import { connect } from "react-redux";
class ShippingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      purchasing: false,
      comfirmOrder: false,
      loading: false
    };
  }
  goBack = () => {
    this.props.history.goBack();
  };
  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <h3>Таны захиалга амттай байх болно гэж найдаж байна...</h3>
        <p>
          Үнийн дүн:<strong>{this.props.totalPrice}</strong>
        </p>
        <Burger ingredients={this.props.ingredients} />
        <Button
          clicked={this.goBack}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />
        <Button
          clicked={this.showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />

        <Route path="/ship/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice
  };
};

export default connect(mapStateToProps)(ShippingPage);
