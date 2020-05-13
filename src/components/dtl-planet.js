import React, { useCallback, useContext } from 'react';
import { Context } from '../store/appContext';



const Dtl_Planet = props => {

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
                                    if (props.match.params.name == planet.name) {
                                        return (
                                            <>
                                                <button className="btn mb-3" onClick={
                                                    () => {
                                                        props.history.goBack()
                                                    }
                                                }>
                                                    Back
                                                </button>
                                                <div className="card col-12 mb-5" key={i} >
                                                    <div className="card-header">{planet.name}</div>
                                                    <img className="card-img-top" src={"../img/planets/" + planet.name + ".jpg"} alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text"><span>Population:</span> {planet.population}</p>
                                                        <p className="card-text"><span>Orbital:</span> {planet.orbital_period}</p>
                                                        <p className="card-text"><span>Diameter:</span> {planet.diameter}</p>
                                                        <p className="card-text"><span>Gravity:</span> {planet.gravity}</p>
                                                        <p className="card-text"><span>Terrain:</span> {planet.terrain}</p>
                                                        <p className="card-text"><span>Surface Water:</span> {planet.surface_water}</p>
                                                        <p className="card-text"><span>Climate:</span> {planet.climate}</p>
                                                    </div>
                                                </div>

                                            </>
                                        )
                                    }

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
export default Dtl_Planet;