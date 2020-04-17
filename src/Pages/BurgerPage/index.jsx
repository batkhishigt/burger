import React, { Component } from "react";
import Burger from "../../Components/Burger";
import BuildControls from "../../Components/BuildControls";
import Modal from "../../Components/General/Modal";
import OrderSummary from "../../Components/OrderSummary";
import Spinner from "../../Components/General/Spinner";

class Burgerbuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comfirmOrder: false,
      loading: false
    };
  }
  showConfirmModal = () => {
    this.setState({ comfirmOrder: true });
  };
  hideConfirmModal = () => {
    this.setState({ comfirmOrder: false });
  };
  continueOrder = () => {
    this.setState({ loading: false });

    this.props.history.push({
      pathname: "/ship"
    });
  };

  render() {
    return (
      <div>
        <Modal
          show={this.state.comfirmOrder}
          hideConfirmModal={this.hideConfirmModal}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.hideConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
        </Modal>
        <p style={{ width: "100%", fontSize: "28px", textAlign: "center" }}>
          Сүүлчийн захиалагч: {this.state.lastCustomer}
        </p>
        <Burger />
        <BuildControls showConfirmModal={this.showConfirmModal} />
      </div>
    );
  }
}
export default Burgerbuilder;
