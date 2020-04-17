import React from "react";
import css from "./buildControl.module.css";
const BuildControl = props => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.name}</div>
      <div className={css.CountLabel}>{props.ingredients[props.type]}</div>
      <button
        className={css.Less}
        onClick={() => props.ingredientsMin(props.type)}
        disabled={props.ingredients[props.type] === 0 ? true : false}
      >
        хасах
      </button>
      <button
        className={css.More}
        onClick={() => props.ingredientsAdd(props.type)}
        disabled={props.ingredients[props.type] === 5 ? true : false}
      >
        нэмэх
      </button>
    </div>
  );
};
export default BuildControl;
