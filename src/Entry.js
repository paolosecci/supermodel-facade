import React from 'react';
import './App.css';
import User from './User';
import LogIn from './LogIn';

function Entry() {
    if(sessionStorage.getItem('mysql_supermodels_user') == null){
        return <LogIn />;
    }
    else{
        return <User />;
    }
}

export default Entry;