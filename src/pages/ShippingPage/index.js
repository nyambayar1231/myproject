import React from "react";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import ContactData from "../../components/ContactData";
import { connect } from "react-redux";
class ShippingPage extends React.Component {
  cancelOrder = () => {
    this.props.history.goBack();
  };
  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };
  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>
            Таны захиалга амжилттай байх болно гэж найдаж байна...
          </strong>
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Дүн: {this.props.price}</strong>
        </p>
        <Burger />
        <Button
          handlerClick={this.cancelOrder}
          btnType="Danger"
          text=" ЗАХИАЛГЫГ ЦУЦЛАХ "
        />
        <Button
          handlerClick={this.showContactData}
          btnType="Success"
          text=" ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ "
        />
        {/*} nested Routing  ===> {*/}
        <Route path="/ship/contact/" render={() => <ContactData />} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};
export default connect(mapStateToProps)(ShippingPage);
