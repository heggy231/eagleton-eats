import React, { useEffect, useState } from "react";

const DisplayProduct = () => {
  const getProducts = async () => {
    try {
      // HEre no need to define method as GET since by default fetch makes a GET request, there is no body to send
      const response = await fetch("http://localhost:8080/product");
      const jsonData = await response.json(); // parse it as JSON
      console.log('jsonData from backend', jsonData);
      // ==> [{}, {}, ...] which is obj of things inside{product_id: 5, name: "ham"}
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  });

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
        </tbody>
      </table>
    </>
  );
};

export default DisplayProduct;
