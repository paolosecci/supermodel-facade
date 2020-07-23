import React from 'react';
import './App.css';

function User(){

    const user = sessionStorage.getItem('mysql_supermodels_user');

    return(
        <h3 className="pageTitle">{user} stuff</h3>
    );
}

export default User;