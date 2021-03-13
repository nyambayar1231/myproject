import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) => {
  const disabledIngredients = { ...props.ingredients };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.totalPrice}</strong>{" "}
      </p>
      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          type={el}
          text={props.ingredientNames[el]}
          addIngredients={props.addIngredients}
          lowerIngredients={props.lowerIngredients}
          disabled={disabledIngredients}
        />
      ))}

      <button
        disabled={props.disabled}
        className={css.OrderButton}
        onClick={props.showConfirmModal}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    totalPrice: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addIngredients: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    lowerIngredients: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
