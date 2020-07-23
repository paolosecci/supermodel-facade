import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Browse() {

    useEffect(() => {
        fetchSupermodels();
    },[]);

    const [supermodels, setSupermodels] = useState([]);

    const fetchSupermodels = async () => {
        const supermodelsPromise = await fetch('http://localhost:8080/supermodel/api/supermodels');
        const supermodels = await supermodelsPromise.json();
        console.log(supermodels);
        setSupermodels(supermodels);
    }

    return(
        <div>
            <h3 className="pageTitle">Catalog</h3>
            <div className="supermodel-container">
                {supermodels.map(supermodel => (
                    <Link className="supermodel-link-block" to={`/supermodel/${supermodel.name}`}>
                        <img className="supermodel-img-block" src={supermodel.imgUrl}></img>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Browse;