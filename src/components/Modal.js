import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		className="modal"
		isOpen={!!props.selectedWish}
		onRequestClose={props.handleClearModal}
		contentLabel="Selected Wish"
		closeTimeoutMS={200}
	>
		<h3 className="modal__title">Selected Wish</h3>
		{props.selectedWish && <p className="modal__body">{props.selectedWish}</p>}
		<button className="button" onClick={props.handleClearModal}>Let's do!</button>
	</Modal>
);

export default OptionModal;
