import React, {Component} from 'react';
import { Label, Modal, ModalBody, Button, Row, Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { connect } from 'react-redux';
import { deleteCQ, fetchCQ } from '../redux/ActionCreators';
import axios from 'axios'
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

const mapStateToProps = state => {
    return {
        concernsquestions: state.concernsquestions
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCQ: (cq) => dispatch(deleteCQ(cq)),
    fetchCQ: () => dispatch(fetchCQ())
})

class ConcernsQuestions extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAdd : false,
            isDelete : false,
            id: '',
            name: '',
            concernsquestions: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);      
        this.handleChange = this.handleChange.bind(this)  
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/api/concernsquestions`)
            .then(res => {
                const cq = res.data;
                this.setState({ cq })
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
    //To add a new note
    
    handleAdd(values) {
        console.log("Added note is: "+ JSON.stringify(values));
        this.toggleAddModal();
        this.props.postCQ(values.cq);
    }
    //To delete holiday based on name of holiday given
    handleDelete(event) {
        const config = {
            headers: {
                'Content-Type': 'text/plain'
            },
            responseType: 'text'
        };
        const Id = {
            id: this.state.id
        }
        this.toggleDeleteModal();
        //this.props.postDeleteHoilday(values.id);
        axios.post(`${baseUrl}cq/delete`, this.state.id , config)
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
            <div className="col">
                <FadeTransform in transformProps = {{exitTransform: 'scale(0.5) translateY(-50%)'}}>               

                <div className="row">
                    <div className="row middle-xs center-xs" style={{padding: "center", margin: 50}}> 
                    <center>
                        <Button outline onClick={this.toggleAddModal}><span className="fa fa-pencil-square fa-lg"></span> Add </Button>
                        <Button outline onClick={this.toggleDeleteModal}><span className="fa fa-trash fa-lg"></span> Delete </Button>
                    </center>
                    </div>
                <Modal isOpen={this.state.isAdd} toggle={this.toggleAddModal}>
                    <center></center>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=> this.handleAdd(values)} >
                            <center>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="cq">Concerns/Questions</Label>
                                    <Control.text model=".cq" id="cq" name="cq" placeholder="Enter concerns" className="form-control" 
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
                                    <Label htmlFor="cq">Concern to be Deleted</Label>
                                    <Control.text model=".name" id="id" name="id" placeholder="Enter Concern ID" className="form-control"
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
                <div className="row">
                    <center>
                        <h3>List of Questions</h3>
                        <table style={{border: '1px solid black', width:'50%'}}>
                            <thead>
                            <th style={{border: '1px solid black', textAlign: 'center'}}>ID </th>
                            <th style={{border: '1px solid black', textAlign: 'center'}}>Concerns/Questions</th></thead>
                            {this.state.concernsquestions.map((cq) => <tbody><tr>
                                <td style={{border: '1px solid black', textAlign: 'center'}}>{cq.id}</td>
                                <td style={{border: '1px solid black', textAlign: 'center'}}>{cq.concern_question}</td>
                            </tr></tbody>)}
                        </table></center>
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConcernsQuestions);