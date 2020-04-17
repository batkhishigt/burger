import React from "react";
import css from "./OrderListItem.module.css";

const OrderListItem = props => {
  return (
    <div className={css.OrderListItem}>
      <p>
        <strong>Орц:</strong> Гахайн мах: {props.order.ingredients.bacon}
        Салад: {props.order.ingredients.salad}
        Үхрийн мах: {props.order.ingredients.meat}
        Баяслаг: {props.order.ingredients.cheese}
      </p>
      <p>
        <strong>Хаяг:</strong> {props.order.address.name} |{" "}
        {props.order.address.street} | {props.order.address.city}
      </p>
      <p>
        <strong>Үнийн дүн:</strong> {props.order.totalPrice} төгрөг
      </p>
    </div>
  );
};
export default OrderListItem;
