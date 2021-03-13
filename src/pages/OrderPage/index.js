import { connect } from "react-redux";
import React from "react";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions from "../../redux/actions/orderActions";
class OrderPage extends React.Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    this.props.loadOrders(this.props.userId);
  }
  render() {
    // console.log("==========", JSON.stringify(this.state.orders)); ===> JSON bolgohdoo
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signupReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // load orders function ni {type: "load_orders"} gesn object butsaj baigaa
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)), // dispatch({type: "Load_orders"})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
