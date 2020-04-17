import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./Burger.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Burger = props => {
  let content = [];
  const items = Object.entries(props.ingredients);
  items.map(el => {
    for (let i = 0; i < el[1]; ++i)
      content.push(<BurgerIngredient key={`${el[0]}+1 ${i}`} type={el[0]} />);
    return null;
  });
  if (content.length === 0)
    content = <p>Хачиртай талхны орцоо сонгоно уу ...</p>;
  return (
    <div>
      <div className={css.Burger}>
        <BurgerIngredient type="bread-top" />
        {content}
        <BurgerIngredient type="bread-button" />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients
  };
};

export default connect(mapStateToProps)(withRouter(Burger));
