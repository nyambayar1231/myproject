import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import BurgerIngredient from "../Burgeringredient";
import css from "./style.module.css";

const Burger = (props) => {
  let content = [];
  let items = Object.entries(props.ingredients);
  items.map((el, j) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${j + 1} ${i + 1}`} type={el[0]} />);
  });
  if (content.length === 0)
    content = <p>Хачиртай талхны орцоо сонгоно уу ...</p>;
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { ingredients: state.burgerReducer.ingredients };
};
export default connect(mapStateToProps)(withRouter(Burger));
