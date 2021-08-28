import React, { useEffect, useState } from "react";
import EditProduct from "./EditProduct";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      // HEre no need to define method as GET since by default fetch makes a GET request, there is no body to send
      const response = await fetch("/api/product");
      const jsonData = await response.json(); // parse it as JSON
      // console.log("jsonData from backend", jsonData);
      // ==> [{}, {}, ...] which is obj of things inside{product_id: 5, name: "ham"}
      setProducts(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // pass [] to make only one request

  const deleteProduct = async (id) => {
    try {
      // delete fetch request to backend
      const deleteProd = await fetch(`/api/product/${id}`, {
        method: "DELETE",
      });

      // filter in ids that are not passed in id
      setProducts(products.filter((product) => product.product_id !== id));

      // console.log("deleted product: ===>", deleteProd);
    } catch (error) {
      console.error(error.message);
    }
  };

  // console.log("all products ==>", products);

  return (
    <>
      <h1 className="text-center">List of Products</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*  <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {products.map((product) => {
            return (
              <tr key={product.product_id}>
                <td>{product.name}</td>
                <td>
                  <EditProduct product={product} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.product_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DisplayProducts;
