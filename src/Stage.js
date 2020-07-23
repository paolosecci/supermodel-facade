import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Stage(){

    const staged_supermodels_str = sessionStorage.getItem('staged_supermodels');
    if(staged_supermodels_str == null){
        return(
            <div>
                <h3 className="pageTitle">Runway Staging</h3>
                <h5 className="pageTitle">No Supermodels in Session Stage</h5>
            </div>
        );
    }

    const staged_supermodels = JSON.parse(staged_supermodels_str);
    return(
        <div>
            <h3>MySQL Runway Stage</h3>
            <div className="supermodel-container">
                {staged_supermodels.map(supermodel => (
                    <a className="supermodel-link-block" key={supermodel.id} href={`/supermodel/${supermodel.name}`}>
                        <img className="supermodel-img-block" src={supermodel.imgUrl}></img>
                    </a>
                ))}
            </div>
            <br></br>
            <Link className="launch-runway" to={"/runway"}>
                Launch Runway Show
            </Link>
        </div>
    );
}

export default Stage;