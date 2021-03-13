import React from "react";
import css from "./style.module.css";
const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.text}</div>
      <button
        className={css.Less}
        onClick={() => props.lowerIngredients(props.type)}
        disabled={props.disabled[props.type]}
      >
        Хасах
      </button>
      <button
        className={css.More}
        onClick={() => props.addIngredients(props.type)}
      >
        Нэмэх
      </button>
    </div>
  );
};
export default BuildControl;
