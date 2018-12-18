import React from 'react';
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <table>
                    <tr>
                        <th><Link to='/home' style={{textDecoration: 'none'}}><h3>List of Tables</h3></Link></th><hr/>
                        <th><Link to="/holidays" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg col-6"/> Holidays </Link></th><hr />
                        <th><Link to="/states" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/> States </Link></th><hr />
                        <th><Link to="/cities" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/> Cities </Link></th><hr />
                        <th><Link to="/countries" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/>  Countries </Link></th><hr />
                        <th><Link to="/formulanotes" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/>  Formula Notes </Link></th><hr />
                        <th><Link to="/concernsquestions" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/>  Concerns Questions </Link></th><hr />
                        <th><Link to="/gm" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/>  Gregorian Month Day </Link></th><hr />
                        <th><Link to="/gms" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/>  GMS </Link></th><hr />
                        <th><Link to="/gnk" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/> GNK </Link></th><hr />
                        <th><Link to="/gkm" style={{textDecoration: 'none'}}><span className="fa fa-database fa-lg"/> GKM </Link></th><hr />
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}