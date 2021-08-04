import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { addToCart } from "../../redux/actions/cartActions";

const Menu = (props) => {
  const handleClick = (id) => {
    props.addToCart(id);
  };

  return (
    <div id="menu">
      {props.items.map((food) => {
        return (
          <Card className="menu-item" key={food.id}>
            <Card.Img
              className="menu-item-img"
              variant="top"
              src={food.imageURL}
            />
            <Card.Body>
              <Card.Title>{food.item}</Card.Title>
              <Card.Text>${food.price}</Card.Text>
              <Button variant="primary" onClick={() => handleClick(food.id)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { items: state.cartReducer.items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
