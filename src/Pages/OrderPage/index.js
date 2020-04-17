import React from "react";
//import css from "./OrderPage.module.css";
import Spinner from "../../Components/General/Spinner";
import OrderList from "../../Components/OrderList";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/orderActions";
class OrderPage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadOrders();
  }
  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <OrderList orders={this.props.orders} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    error: state.orderReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: () => dispatch(actions.loadOrders()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
