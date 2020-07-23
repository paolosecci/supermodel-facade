import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function Runway(){

    const runway_supermodels = JSON.parse(sessionStorage.getItem('staged_supermodels'));
    const isLogged = useSelector(myState => myState.isLogged)

    return(
        <div>
            <h5>is logged: {isLogged}</h5>
            <h3 className="pageTitle">MySQL Fashion Show</h3>
            <div className="runway">
                {runway_supermodels.map(supermodel => (
                    <div className="runway-supermodel-container">
                        <img className="runway-supermodel" src={supermodel.gifUrl}></img>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Runway;