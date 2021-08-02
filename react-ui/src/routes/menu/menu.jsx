import foods from "../../data/food";

const Menu = () => {
  return (
    <div>
      {foods.foods.map((food) => {
        return (
          <div>
            {/* <img src={food.image} /> */}
            <h2>{food.item}</h2>
            <p>{food.price}</p>
          </div>
        );
      })}
      )<h1>Food Pics</h1>
    </div>
  );
};

export default Menu;
