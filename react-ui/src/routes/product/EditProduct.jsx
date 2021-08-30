import React, { useState } from "react";

const EditProduct = ({ product }) => {
  const [name, setName] = useState(product.name);
  console.log("data flow from DisplayProduct product", product); // => {product_id: 5, name: "ham"} then {product_id: 6, name: "Ja Jang"}

  // locally I can input info into modal input box
  const handleEditInputChange = (e) => setName(e.target.value);
  // once I setName and name local var is updated now it is time to
  //  send the data to backend
  const handleEditBtnSubmitToBackend = async (e) => {
    e.preventDefault(); // keeps from page refresh
    try {
      // send data to backend, remember to package your data when send to backend
      const body = { name };
      // send response to RESTApi
      await fetch(`/api/product/${product.product_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      // console.log(response);
      // refresh to see the changes in the UI
      window.location = "/product";
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleResetData = () => setName(product.name);

  return (
    <>
      <div className="container" style={{ marginLeft: "-1rem" }}>
        {/* data-target maps for unique modal look for id=id5 out many modals from DisplayProduct page */}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#id${product.product_id}`}
        >
          Edit
        </button>

        {/* make each modal unique by append product_id then "id" prepend  ==> result: id = id5 */}
        <div
          className="modal fade"
          id={`id${product.product_id}`}
          onClick={handleResetData}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Product Name</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={handleResetData}
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={handleEditInputChange}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={handleEditBtnSubmitToBackend}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleResetData}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
