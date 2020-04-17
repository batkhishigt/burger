import React from "react";
import css from "./OrderList.module.css";
import OrderListItem from "../OrderListItem";

const OrderList = props => {
  return (
    <div className={css.OrderList}>
      <h3>Захиалгууд</h3>
      <hr />
      {props.orders.map(el => (
        <OrderListItem key={el[0]} order={el[1]} />
      ))}
    </div>
  );
};
export default OrderList;
