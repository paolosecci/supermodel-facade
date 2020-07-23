import React, {useState, useEffect} from 'react';
import './App.css';
import { useParams } from 'react-router-dom';

function SupermodelDisplay() {

    let { name } = useParams();

    useEffect(() => {
        fetchSupermodel();
    },[]);

    const [supermodel, setSupermodel] = useState([]);

    const fetchSupermodel = async () => {
        const supermodelPromise = await fetch(`http://localhost:8080/supermodel/${name}`);
        const supermodel = await supermodelPromise.json();
        setSupermodel(supermodel);
    }

    function addToSessionStage(){
        if(returningToBrowse){
            window.location.href = "/browse";
        }else{
            const staged_supermodels_str = sessionStorage.getItem('staged_supermodels');
            if(staged_supermodels_str == null){
                const staged_supermodels = [supermodel];
                sessionStorage.setItem('staged_supermodels', JSON.stringify(staged_supermodels));
            }else{
                const staged_supermodels = JSON.parse(staged_supermodels_str);
                staged_supermodels.push(supermodel);
                sessionStorage.setItem('staged_supermodels', JSON.stringify(staged_supermodels));
            }

            let button = document.getElementById("supermodel-display-button");
            button.innerText = "Continue Shopping";
            returningToBrowse = true;
        }
    }
    let returningToBrowse = false;

    return(
        <div>
            <h3>{supermodel.name}</h3>
            <div>
                <img className="supermodel-display-img-block" src={supermodel.imgUrl}></img>
            </div>
            <button id="supermodel-display-button" className="supermodel-display-button" onClick={addToSessionStage}>
                Add to Runway Stage
            </button>
        </div>
    );

}

export default SupermodelDisplay;