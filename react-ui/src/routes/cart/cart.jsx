import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import {
  calculateCartTotal,
  findItemById,
} from "../../redux/reducers/cartReducer";

const Cart = (props) => {
  console.log("props", props);

  const [len, setLen] = useState(props.cartItems.length);
  
  useEffect(() => {
    const numCartitems = props.cartItems.length;

    if (len !== numCartitems) {
      setLen(numCartitems);
    }
  }, [len, props.cartItems.length]);

  const removeCartItem = (id) => {
    props.removeFromCart(id);
    setLen(len-1); // comment this line to see what happens
  };

  return (
    <div id="cart">
      <div>
        <h1>Order Form - items</h1>
        <div>
          {props.cartItems.map((id, i) => {
            const item = findItemById(id, props.items);
            return (
              <div key={i} className='cart-item'>
                {i + 1}. {item.item}: ${item.price}
                <button className="btn btn-primary" onClick={() => removeCartItem(i)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div>Number of items {len}</div>
        <div>total: ${calculateCartTotal(props.cartItems, props.items).toFixed(2)}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
    cartItems: state.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);
