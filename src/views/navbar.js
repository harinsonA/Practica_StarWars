import React from 'react';
import foto from '../views/recursos/image/starwars.png';
import {Link} from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <img src={foto} className="rounded float-left" alt="Star Wars"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><span>Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/people"><span>People</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vehicles"><span>Vehicles</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets"><span>Planets</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;