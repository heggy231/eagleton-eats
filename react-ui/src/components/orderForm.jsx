import { connect } from 'react-redux';
import { updateOrder } from '../redux/actions';

const OrderForm = ({ updateOrder, orders }) => {

  const handleChange = e => {
    const orders = e.target.value;
    updateOrder(orders);
  }

  return <input onChange={handleChange} value={orders} />;

};

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch => ({
  updateOrder: username => dispatch(updateOrder(orders))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);