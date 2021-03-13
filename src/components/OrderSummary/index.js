import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";
const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захалга</h3> <p>Таны сонгосон орцууд</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн : {props.totalPrice} </strong>
      </p>
      <p>Цаашаа үргэлжлүүлэх үү?</p>
      <Button
        btnType="Danger"
        text="Татгалзах"
        handlerClick={props.closeConfirmModal}
      />
      <Button
        btnType="Success"
        text="Үргэлжлүүлэх"
        handlerClick={props.onContinue}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    ingredientNames: state.burgerReducer.ingredientNames,
    totalPrice: state.burgerReducer.totalPrice,
  };
};
export default connect(mapStateToProps)(OrderSummary);
