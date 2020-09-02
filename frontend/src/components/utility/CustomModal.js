import React from "react";
import { Modal, Button } from "react-bootstrap";

function CustomModal({ show, handleClose, onSubmit,onChange ,value }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="addCategory"
                onChange={onChange}
                value={value}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default CustomModal;
