import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";
class BurgerPage extends Component {
  state = {
    confirmOrder: false,
  };
  continueOrder = () => {
    this.props.history.push("/ship");
    this.closeConfirmModal();
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              closeConfirmModal={this.closeConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
          <p>Захиалгын дэлэгэрэнгүй</p>
        </Modal>
        <Burger />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          //   closeConfirmModal={this.closeConfirmModal}
          addIngredients={this.props.burgertOrtsNem}
          lowerIngredients={this.props.burgereesOrtsHas}
        />
      </div>
    );
  }
}

export default BurgerPage;
