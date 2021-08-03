import foods from "../../data/food";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

import Brisket from "../../data/FoodImages/brisket.jpg";
import Boudin from "../../data/FoodImages/boudin.jpg";
import Ribs from "../../data/FoodImages/ribs.jpg";
import Sausage from "../../data/FoodImages/sausage.jpg";
import Greens from "../../data/FoodImages/greens.jpg";
import GreenBeans from "../../data/FoodImages/greenbeans.jpg";
import Rice from "../../data/FoodImages/rice.jpg";

const foodImages = [Brisket, Boudin, Ribs, Sausage, Greens, GreenBeans, Rice];

const Menu = () => {
  return (
    <div>
      {foods.foods.map((food) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={foodImages[food.id]} />
            <Card.Body>
              <Card.Title>{food.item}</Card.Title>
              <Card.Text>{food.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        );
      })}
      <h1>Food Pics</h1>
    </div>
  );
};

export default Menu;
