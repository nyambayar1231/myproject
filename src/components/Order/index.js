import React from "react";
import css from "./style.module.css";
const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц: Гахайн мах : {props.order.ingredients.bacon}, Бяслаг : &nbsp;
        {props.order.ingredients.cheese}, Үхрийн мах : &nbsp;
        {props.order.ingredients.meat}, Салад: {props.order.ingredients.salad} :
      </p>
      <p>
        Хаяг: {props.order.hayg.name} | {props.order.hayg.street} |
        {props.order.hayg.city}
      </p>
      <p>
        Үнийн дүн: <strong>{props.order.dun}₮ </strong>
      </p>
    </div>
  );
};
export default Order;
