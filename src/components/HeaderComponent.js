import React, { Component } from 'react';
import { Navbar, Collapse, Nav, Jumbotron } from 'reactstrap';
//import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return(
                <Navbar dark expand="md">
                    <div className = "container">
                       
        {/*<NavbarBrand className= "mr-auto" href = '/'><img src="C:\Users\Raja Swathi\holidays\public\mysql-backup.png" height="30" width="41" alt="MySQL" /></NavbarBrand>*/}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                {/*<NavItem>
                                    <NavLink className='nav-link' to="/holidays"><span className="fa fa-database fa-lg"/>{' '}Holidays </NavLink>
                                </NavItem>*/}
                                {/*<NavItem>
                                    <NavLink className='nav-link' to="/aboutus"><span className="fa fa-info fa-lg"/>About Us </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to="/menu"><span className="fa fa-list fa-lg"/>Menu </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to="/contactus"><span className="fa fa-address-card fa-lg"/>Contact Us </NavLink>
                                </NavItem>*/}
                            </Nav>                            
                        </Collapse>
                    </div>
                
                <Jumbotron>
                            <div className="col-12 col-sm-6">
                                <h1><center>Holidays database</center></h1>
                                <p> <center>To manage tables from MySQL database </center></p>
                            </div>
                </Jumbotron>
                </Navbar>
        );
    }
}

export default Header;