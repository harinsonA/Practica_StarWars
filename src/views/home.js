import React from 'react';
import peoplehome from '../views/recursos/image/people-home.jpg';
import vehiclehome from '../views/recursos/image/vehicle-home.jpg';
import planethome from '../views/recursos/image/planet-home.jpg';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div className="c-home">
            <div className="container">
                <div>
                    <div className="card w-100">
                        <img className="card-img-top" src={peoplehome} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">People</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/people" className="btn btn-primary">More...</Link>
                        </div>
                    </div>
                    <div className="card w-100">
                        <img className="card-img-top" src={vehiclehome} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Vehicles</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/vehicles" className="btn btn-primary">More...</Link>
                        </div>
                    </div>
                    <div className="card w-100">
                        <img className="card-img-top" src={planethome} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Planets</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/planets" className="btn btn-primary">More...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Home;