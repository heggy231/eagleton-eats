import foods from "../../data/food";

const Menu = () => {
  return (
    <div>
      {foods.map((food) => {
        //   return (
        //     <div>
        //       {/* <img src={food.image} /> */}
        //       <h2>{food.item}</h2>
        //       <p>{food.price}</p>
        //     </div>
        //   );
        // })}
        console.log(food);
        return <p>Food</p>;
      })}
      <h1>Food Pics</h1>
    </div>
  );
};

export default Menu;
