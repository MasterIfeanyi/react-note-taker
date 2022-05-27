import { Modal } from "react-bootstrap";
import { useState } from "react";

const Note = ({ note }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-6">
        <div className="card text-start">
          <div className="card-body">
            <h5 className="card-title fw-bold">Note {note.id}</h5>
            <p className="card-text leads">
              {note.newNote.length <= 25
                ? note.newNote
                : `${note.newNote.slice(0, 25)}...`}
            </p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleShow()}
            >
              View details
            </button>
          </div>
        </div>
      </div>

      <Modal dialogClassName="modal-40w" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Note {note.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="leads">{note.newNote}</p>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              handleClose();
            }}
          >
            Close
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Note;
