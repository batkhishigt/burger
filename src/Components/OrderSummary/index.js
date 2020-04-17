import React from "react";
import { connect } from "react-redux";

//import css from "./OrderSummary.module.css";
import Button from "../General/Button";

const OrderSummary = (props) => {
  return (
    <div>
      <h1>tanii zahialga</h1>
      <p>tanii songoson ortsuud</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => {
          return (
            <li key={el}>
              {props.ingredient_names[el]}:{props.ingredients[el]}
            </li>
          );
        })}
      </ul>
      <p>
        <strong>Захиалгын дүн : {props.totalPrice}</strong>
      </p>
      <Button text="ТАТГАЛЗАХ" btnType="Danger" clicked={props.onCancel} />
      <Button
        text="ҮРГЭЛЖЛҮҮЛЭХ"
        btnType="Success"
        clicked={props.onContinue}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    ingredient_names: state.burgerReducer.ingredient_names,
  };
};

export default connect(mapStateToProps)(OrderSummary);
