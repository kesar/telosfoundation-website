import React from 'react';
import {Modal} from 'react-bootstrap';

const PrivacyPolicyModal = (props) => {
	return (
        <Modal
            {...props}
        >
            <Modal.Header closeButton>
                <Modal.Title>Telos Foundation Website Privacy Policy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            	policy goes here.
            </Modal.Body>
        </Modal>
	);
};

export default PrivacyPolicyModal;