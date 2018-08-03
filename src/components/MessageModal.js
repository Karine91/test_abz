import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const MessageModal = props => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.handleCloseModal}
    contentLabel="Error!"
    closeTimeoutMS={200}
    className="modal"
    style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, .2)"
      }
    }}
  >
    <h3 className="modal__title">{props.title}</h3>
    {props.message && <p className="modal__body">{props.message}</p>}
    <button className="button" onClick={props.handleCloseModal}>
      OK
    </button>
  </Modal>
);

export default MessageModal;
