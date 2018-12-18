import React, {Component} from 'react';
import { Label, Modal, ModalBody, Button, Row, Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { connect } from 'react-redux';
import { deleteState, fetchStates } from '../redux/ActionCreators';
import axios from 'axios'
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

const mapStateToProps = state => {
    return {
        states: state.states
    }
}

const mapDispatchToProps = dispatch => ({
    deleteState: (stateName) => dispatch(deleteState(stateName)),
    fetchStates: () => dispatch(fetchStates())
})

class States extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAdd: false,
            isDelete: false,
            id: '',
            name: '',
            country: '',
            states: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);      
        this.handleChange = this.handleChange.bind(this)  
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/api/states`)
            .then(res => {
                const states = res.data;
                this.setState({ states })
            })
    }

    toggleAddModal() {
        this.setState({
            isAdd: !this.state.isAdd
        });
    }

    toggleDeleteModal() {
        this.setState({
            isDelete: !this.state.isDelete
        });
    }
    //To add a new Country
    
    handleAdd(values) {
        console.log("Added State is: "+ console.log(values.country));
        this.toggleAddModal();
        this.props.postState(values.name, values.country);
    }
    //To delete state based on name of state id given
    handleDelete(event) {
        const config = {
            headers: {
                'Content-Type': 'text/plain'
            },
            responseType: 'text'
        };

        this.toggleDeleteModal();

        axios.post(`${baseUrl}states/delete`, this.state.id , config)
            .then((response) => {
                console.log('deleted successfully')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleChange = event => {
        this.setState({id: event.target.value});
    }

    render(){

        return(
            <div className="row">     
                <FadeTransform in transformProps = {{exitTransform: 'scale(0.5) translateY(-50%)'}}>               
                    <center>
                    <h3>List of States</h3>
                        <table style={{border: '1px solid black', width:'50%'}}>
                        <thead>
                        <th style={{border: '1px solid black', textAlign: 'center'}}>ID </th>
                        <th style={{border: '1px solid black', textAlign: 'center'}}>State</th>
                        <th style={{border: '1px solid black', textAlign: 'center'}}>Country</th>
                        </thead>
                    {this.state.states.map((stateName) => <tbody><tr><td style={{border: '1px solid black', textAlign: 'center'}}>{stateName.id}</td><td style={{border: '1px solid black', textAlign: 'center'}}>{stateName.name}</td><td style={{border: '1px solid black', textAlign: 'center'}}>{stateName.country}</td></tr></tbody>)}
                    </table></center>
                <div className="row">
                    <div className="row middle-xs center-xs" style={{padding: "center", margin: 50}}> 
                    <center>
                        <Button outline onClick={this.toggleAddModal}><span className="fa fa-pencil-square fa-lg"></span> Add State </Button>
                        <Button outline onClick={this.toggleDeleteModal}><span className="fa fa-trash fa-lg"></span> Delete State </Button>
                    </center>
                    </div>
                <Modal isOpen={this.state.isAdd} toggle={this.toggleAddModal}>
                    <center></center>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=> this.handleAdd(values)} >
                            <center>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="country">State</Label>
                                    <Control.text model=".name" id="name" name="name" placeholder="Enter State Name" className="form-control" 
                                        autoFocus={true} />
                                    <Label htmlFor="country">Country Id</Label>
                                    <Control.text model=".country" id="country" name="country" placeholder="Enter Country Id" className="form-control"
                                                  autoFocus={true} />
                                    <Button type="submit" color="primary" >
                                        Submit
                                    </Button>
                                    <Button type="cancel" color="primary" >
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                            </center>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isDelete} toggle={this.toggleDeleteModal}>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleDelete} >
                            <center>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="holiday">State to be Deleted</Label>
                                    <Control.text model=".name" id="id" name="id" placeholder="Enter Holiday ID" className="form-control"
                                         autoFocus={true} onChange={this.handleChange} />
                                    <Button type="submit" color="primary" >
                                        Delete
                                    </Button>
                                    <Button type="cancel" color="primary" >
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                            </center>
                        </LocalForm>
                    </ModalBody>
                    </Modal>
                </div>
                </FadeTransform>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(States);