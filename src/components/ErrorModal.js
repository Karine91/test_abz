import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const ErrorModal = (props) => (
    <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.handleCloseModal}
        contentLabel="Error!"
        closeTimeoutMS={200}
        className="modal"
        style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, .2)'
            }
        }}
    >
        <h3 className="modal__title">Error!</h3>
        { props.errorMessage && <p className="modal__body">{ props.errorMessage }</p> }
        <button className="button" onClick={props.handleCloseModal}>OK</button>
    </Modal>
);

export default ErrorModal;