import React, { useCallback, useContext } from 'react';
import { Context } from '../store/appContext';



const Dtl_People = props => {

    const { store, actions } = useContext(Context);
    const style = {
        width: '100%'
    }

    return (

        <>
            <div className="c-people">
                <div className="container">
                <div className="title col-12">
                    <h1 className="col-12">People</h1>
                </div>
                    <div className="row">
                        {
                            !!store.peoples ?
                                store.peoples.results.map((people, i) => {
                                    if (props.match.params.name == people.name) {
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
                                                    <div className="card-header">{people.name}</div>
                                                    <img className="card-img-top" src={"../img/people/" + people.name + ".jpg"} alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text"><span>Birthday:</span> {people.birth_year}</p>
                                                        <p className="card-text"><span>Height:</span> {people.height}</p>
                                                        <p className="card-text"><span>Mass:</span> {people.mass}</p>
                                                        <p className="card-text"><span>Skin Color:</span> {people.skin_color}</p>
                                                        <p className="card-text"><span>Hair Color:</span> {people.hair_color}</p>
                                                        <p className="card-text"><span>Eyes Color:</span> {people.eye_color}</p>
                                                        <p className="card-text"><span>Gender:</span> {people.gender}</p>
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
export default Dtl_People;