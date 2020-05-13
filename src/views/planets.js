import React, { useCallback, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';



const Planets = props => {

    const { store, actions } = useContext(Context);
    const style = {
        width: '100%'
    }

    return (

        <>
            <div className="c-planet">
                <div className="container">
                    <div className="title col-12">
                        <h1 className="col-12">Planets</h1>
                    </div>
                    <div className="row">
                        {
                            !!store.planets ?
                                store.planets.results.map((planet, i) => {
                                    return (
                                        <div className="col-4 mb-3" key={i}>
                                            <Link to={"/planets/" + planet.name}>
                                                <div className="card">
                                                    <img className="card-img-top" src={"img/planets/" + planet.name + ".jpg"} alt={planet.name} />
                                                    <div className="card-body">
                                                        <div className="card-header">{planet.name}</div>
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
export default Planets;
                                        // <div className="col-4 mb-3" key={i}>
                                        //     <div className="card" >
                                        //         <div className="card-header">{planet.name}</div>
                                        //         <div className="card-body">
                                        //             <p className="card-text"><span>Population:</span> {planet.population}</p>
                                        //             <p className="card-text"><span>Orbital:</span> {planet.orbital_period}</p>
                                        //             <p className="card-text"><span>Diameter:</span> {planet.diameter}</p>
                                        //             <p className="card-text"><span>Gravity:</span> {planet.gravity}</p>
                                        //             <p className="card-text"><span>Terrain:</span> {planet.terrain}</p>
                                        //             <p className="card-text"><span>Surface Water:</span> {planet.surface_water}</p>
                                        //             <p className="card-text"><span>Climate:</span> {planet.climate}</p>
                                        //         </div>
                                        //     </div>
                                        // </div>