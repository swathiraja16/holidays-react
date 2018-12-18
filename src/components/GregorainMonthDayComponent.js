import React, {Component} from 'react';
import { Label, Modal, ModalBody, Button, Row, Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { connect } from 'react-redux';
import { deleteGM, fetchGM } from '../redux/ActionCreators';
import axios from 'axios'
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

const mapStateToProps = state => {
    return {
        gm: state.gm
    }
}

const mapDispatchToProps = dispatch => ({
    deleteGM: (id) => dispatch(deleteGM(id)),
    fetchGM: () => dispatch(fetchGM())
})

class GregorianMonthDay extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAdd: false,
            isDelete: false,
            id: '',
            month: '',
            Day: '',
            Offset: '',
            leapYear: '',
            gm: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleAddModal = this.toggleAddModal.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);      
        this.handleChange = this.handleChange.bind(this)  
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/api/gregorianmonthday`)
            .then(res => {
                const gm = res.data;
                this.setState({ gm })
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
    //To add a new City
    
    handleAdd(values) {
        console.log("Added State is: "+ console.log(values.country));
        this.toggleAddModal();
        this.props.postGM(values.month, values.day, values.offset, values.leapYear);
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

        axios.post(`${baseUrl}gm/delete`, this.state.id , config)
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
                    <h3>List of Gregorian Month Day</h3>
                        <table style={{border: '1px solid black', width:'50%'}}>
                        <thead>
                        <th style={{border: '1px solid black', textAlign: 'center'}}>ID </th>
                        <th style={{border: '1px solid black', textAlign: 'center'}}>Month</th>
                        <th style={{border: '1px solid black', textAlign: 'center'}}>Day</th>
                        <th style={{border: '1px solid black', textAlign: 'center'}}>Offset</th>
                        <th style={{border: '1px solid black', textAlign: 'center'}}>Leap Year Adjust</th>
                        </thead>
                    {this.state.gm.map((gm) => <tbody><tr><td style={{border: '1px solid black', textAlign: 'center'}}>{gm.id}</td>
                    <td style={{border: '1px solid black', textAlign: 'center'}}>{gm.month}</td>
                    <td style={{border: '1px solid black', textAlign: 'center'}}>{gm.day}</td>
                    <td style={{border: '1px solid black', textAlign: 'center'}}>{gm.offset}</td>
                    <td style={{border: '1px solid black', textAlign: 'center'}}>{gm.LeapYearAdjust}</td>
                    </tr></tbody>)}
                    </table></center>
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
                                    <Label htmlFor="country"> Month</Label>
                                    <Control.text model=".month" id="month" name="month" placeholder="Enter Month" className="form-control" 
                                        autoFocus={true} />
                                    <Label htmlFor="country">Day </Label>
                                    <Control.text model=".day" id="day" name="day" placeholder="Enter Day" className="form-control"
                                                  autoFocus={true} />
                                    <Label htmlFor="country">Offset</Label>
                                    <Control.text model=".offset" id="offset" name="offset" placeholder="Enter Offset" className="form-control"
                                                  autoFocus={true} />
                                    <Label htmlFor="country">Leap Year Adjust</Label>
                                    <Control.text model=".leapYear" id="leapYear" name="leapYear" placeholder="Enter Leap Year Adjust" className="form-control"
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
                                    <Label htmlFor="holiday">Gregorian Month to be Deleted</Label>
                                    <Control.text model=".name" id="id" name="id" placeholder="Enter ID" className="form-control"
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

export default connect(mapStateToProps, mapDispatchToProps)(GregorianMonthDay);