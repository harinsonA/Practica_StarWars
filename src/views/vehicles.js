import React, { useCallback, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';



const Vehicles = props => {

    const { store, actions } = useContext(Context);
    const style = {
        width: '100%'
    }

    return (

        <>
            <div className="c-vehicle">
                <div className="container">
                    <div className="title col-12">
                        <h1 className="col-12">Vehicles</h1>
                    </div>
                    <div className="row">
                        {
                            !!store.vehicles ?
                                store.vehicles.results.map((vehicle, i) => {
                                    return (
                                        <div className="col-4 mb-3" key={i}>
                                            <Link to={"/vehicles/" + vehicle.name}>
                                                <div className="card">
                                                    <img className="card-img-top" src={"img/vehicles/" + vehicle.name + ".jpg"} alt={vehicle.name} />
                                                    <div className="card-body">
                                                        <div className="card-header">{vehicle.name}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )

                                }) :
                                (<div className="col-12">

                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={style} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                            Cargando...
                                    </div>
                                    </div>
                                </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>)
}
export default Vehicles;
                                        // <div className="col-4 mb-3" key={i}>
                                        //     <div className="card" >
                                        //         <div className="card-header">{vehicle.name}</div>
                                        //         <div className="card-body">
                                        //             <p className="card-text"><span>Manufacturer:</span> {vehicle.manufacturer}</p>
                                        //             <p className="card-text"><span>Model:</span> {vehicle.model}</p>
                                        //             <p className="card-text"><span>Vehicle Class:</span> {vehicle.vehicle_class}</p>
                                        //             <p className="card-text"><span>Capacity:</span> {vehicle.cargo_capacity}</p>
                                        //             <p className="card-text"><span>Passengers:</span> {vehicle.passengers}</p>
                                        //             <p className="card-text"><span>Consumables:</span> {vehicle.consumables}</p>
                                        //             <p className="card-text"><span>Cost:</span> {vehicle.cost_in_credits}</p>
                                        //         </div>
                                        //     </div>
                                        // </div>