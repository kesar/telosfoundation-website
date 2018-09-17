import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import Remarkable from 'remarkable';
import '../../styles/privacy_policy.css';

const md = new Remarkable();

class PrivacyPolicyModal extends Component {

    constructor(){
        super();
        this.state = {
            policy: ''
        };
    }

    componentDidMount(){
        axios.get('/resources/privacy_policy_en.md')
        .then(res => this.setState({policy: res.data}))
        .catch(err => console.log(err));
    }

    render(){
        return (
            <Modal
                {...this.props}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Telos Foundation Website Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class='privacy_policy' dangerouslySetInnerHTML={{__html: md.render(this.state.policy)}} />
                </Modal.Body>
            </Modal>
        );
    }
}

export default PrivacyPolicyModal;