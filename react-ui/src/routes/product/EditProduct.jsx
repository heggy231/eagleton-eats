import React from "react";

const EditProduct = () => {
  return (
    <>
      <div class="container">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
        >
          Edit Name
        </button>

        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">Modal body..</div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default EditProduct;
