import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/bugerActions";
import css from "./buildConstrols.module.css";
import BuildControl from "../BuildControl";
const BuildControls = props => {
  return (
    <div className={css.BuildControls}>
      <div className={css.Price}>
        Бургерийн үнэ:<strong> {props.totalPrice}</strong>
      </div>
      {Object.keys(props.ingredient_names).map(el => {
        return (
          <BuildControl
            key={el}
            type={el}
            name={props.ingredient_names[el]}
            ingredients={props.ingredients}
            ingredientsAdd={props.ingredientsAdd}
            ingredientsMin={props.ingredientsMin}
          />
        );
      })}
      <button
        onClick={props.showConfirmModal}
        className={css.OrderButton}
        disabled={!props.purchasing}
      >
        Захиалах
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredient_names: state.burgerReducer.ingredient_names
  };
};
const mapDispatchToProps = dispatch => {
  return {
    ingredientsAdd: ingeredientName =>
      dispatch(actions.addIngredient(ingeredientName)),
    ingredientsMin: ingeredientName =>
      dispatch(actions.minIngredient(ingeredientName))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
